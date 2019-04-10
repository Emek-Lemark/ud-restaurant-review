let cacheKeepList = 'restaurant-rev-v3';
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
      .open(cacheKeepList)
      .then(cache => cache.addAll(urlsToCache))
      .then(self.skipWaiting())
  );
});

// Add activate event to delete old cache
self.addEventListener("activate", event => {
  event.waitUntil(
// Get all the cache names
  	caches.keys().then(cacheNames => Promise.all(
  		// Get all items stored under different cache name than Cache list
  		cahceNames.map(cache => {
      if (cache !== cacheKeepList) {
        console.log("[ServiceWorker] removing cached files from ", cache);
        // delete the item
        return caches.delete(cache);
      }
    })))
  )
})


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


