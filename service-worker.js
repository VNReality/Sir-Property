self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('sir-property-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/app.js',
                '/manifest.json'
            ]);
        })
    );
    console.log('Service Worker Installed');
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});