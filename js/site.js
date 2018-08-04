//Register Service Worker
if(navigator.serviceWorker){
    window.addEventListener('load', ()=>{
			navigator.serviceWorker
				.register('../sw_cache_site.js')
				.then(()=> console.log('Service Worker: Registered'))
				.catch(err => console.log(`Error: ${err}`))
		})
}