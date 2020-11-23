if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./pwa-examples/js13kpwa/sw.js');
};

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});
