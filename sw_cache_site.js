const cacheName = 'v';



//Call install Event
self.addEventListener('install', (e)=> {
	console.log('Service Worker: Installed');
	
})

//Call Activate Event
self.addEventListener('activate', (e)=> {
	console.log('Service Worker: Activated');
	//Remove unwanted cache
	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
					return Promise.all(
						cacheNames.map(cache => {
							if(cache != cacheName){
								console.log('Service Worker: Clearing Old Cache');
								return caches.delete(cache);
							}
						})
					)
			})
	);
})

//Call Fetch Event
self.addEventListener('fetch', (e) => {
	console.log('Service Worker: Fetching');
	e.respondWith(
        fetch(e.request)
        .then(res => {
            //Make Copy/Clone response
            const resClone = res.clone();
            //Open Cache
            caches.open(cacheName)
            .then(cache => {
                //Add response to cache
                cache.put(e.request, resClone);
            })
            return res;
        })
        .catch(err => caches.match(e.request).then(res => res))
	)
})