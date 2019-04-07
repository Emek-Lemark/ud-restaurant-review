let cacheKeeplist = 'restaurant-rev-v1'

self.addEventListener('install', event => {
	//Opened a cache name called catchKeeplist
    event.waitUntil(caches.open(cacheKeeplist)
    //Add an array of URLs to cache 
        .then(cache => cache.addAll([
				'./',
				'./index.html',
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
        ]))
    );
});


// Respond with an entry from the catch or fetch if there isnt one
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			if (response) return response;
			return fetch(event.request);
		}))
});

// Add activate event to delete old cache
self.addEventListener('activate', event => {
	event.waitUntil(caches.keys().then(keyList => {
			return Promise.all(keyList.filter(key => {
					return key.startsWith('restaurant-') && 
						   key != cacheKeeplist;
				}).map(key => {
					return caches.delete(key);
				})
			);
		})
	);
})