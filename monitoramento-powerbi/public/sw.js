const CACHE_NAME = 'dados-cache-v1';
const URLS_TO_CACHE = ['/paineis.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/paineis.json')) {
    event.respondWith(
      caches.match(event.request).then(response => {
    
        if (response) return response;
        return fetch(event.request).then(res => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
          return res;
        });
      })
    );
  }
});
