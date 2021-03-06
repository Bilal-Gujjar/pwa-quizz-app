
let cacheData = 'pwa-exp-tracker';

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((data)=>{
            data.addAll([
                "/static/js/main.chunk.js",
                "/static/js/1.chunk.js",
                "/static/js/bundle.js",
                "/index.js",
                "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"  
            ])
        })
    )
})
this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) =>{
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});