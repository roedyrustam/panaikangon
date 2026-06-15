const CACHE_NAME = 'panaikang-onboarding-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Mengembalikan dari cache jika ada, jika tidak fetch dari network
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
