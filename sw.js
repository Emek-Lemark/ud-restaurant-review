let cacheKeepList = 'restaurant-static-v1';
let urlsToCache = [ 
				'./',
				'./index.html',
				'./favicon.ico',
				'./restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./js/register_sw.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg'
];

//Install service worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open('restaurant-static-v1')
      .then(cache => cache.addAll(urlsToCache))
      .then(self.skipWaiting())
  );
});



// Add activate event to delete old cache
self.addEventListener('activate', event => {
  // delete any caches that aren't in cacheKeepList
  // which will get rid of old caches
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!cacheKeepList.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('V1 now ready to handle fetches!');
    })
  );
});


// Respond with an entry from the catch or fetch if there isnt one
self.addEventListener("fetch", event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  }
});


