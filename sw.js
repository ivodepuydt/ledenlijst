// Minimale service worker: nodig om de ledenlijst als app te kunnen installeren.
// Bewaart niets: alles komt altijd live van internet.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
