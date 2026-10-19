// Stub service worker: registration only (enables "Add to Home Screen").
// No caching logic - the app always loads fresh.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
