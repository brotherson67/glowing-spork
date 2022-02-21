const VERSION = 'version_01';
const CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    'css/styles.css',
    'js/idb.js',
    'js/index.js',
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png'
];

//install service worker 
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache: ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE);
        })
    )
    self.skipWaiting();
})

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(keyList =>{
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== VERSION) {
                        console.log('removing cache data', key);
                        return caches.delete(key);
                    }
                })
            )
        })
    );
    //take every instance of the application a user has and claim this activation, this service worker is activated among all demands a user has open 
    self.clients.claim()
})

//intercept fetch request 
self.addEventListener('fetch', (e) => {
    if (e.request.url.includes('/api/')) {
        e.respondWith(
            caches
              .open(CACHE_NAME)
              .then(cache => {
                return fetch(e.request)
                  .then(response => {
                    if (response.status === 200) {
                        //response.clone can only be used once to we clone it so it can be used later 
                      const responseClone = response.clone();
                      cache.put(e.request.url, responseClone);
                    }
      
                    return response;
                  })
                  .catch(err => {
                    // Network request failed, try to get it from the cache.
                    return cache.match(e.request);
                  });
              })
              .catch(err => console.log(err))
          );
      
          return;
        }
    
        e.respondWith(
            fetch(e.request).catch(function () {
                return caches.match(e.request).then(function(response){
                    if (response) {
                        return response;
                    } else if (e.request.headers.get('accept').includes('text.html')) {
                        return caches.match('/');
                    }
                });
            })
        );
    });
    