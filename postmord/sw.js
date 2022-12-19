const CACHE_NAME = 'my-cache';
self.addEventListener('install', e => {
    console.log('Installing Service Worker');
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                'static/js/bundle.js'
            ])
            .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', e => {
    console.log('Activating Service Worker');
    e.waitUntil(self.clients.claim());
})