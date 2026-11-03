/* Majix Suite service worker. Increment CACHE_VERSION when publishing a new release. */
const CACHE_VERSION = 'majix-suite-v10';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_SHELL)));
  // Do not skip waiting automatically: the user can choose Update Now.
});
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('majix-suite-') && key !== CACHE_VERSION).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_VERSION);
          cache.put('./index.html', response.clone());
        }
        return response;
      } catch (error) {
        return (await caches.match('./index.html')) || (await caches.match('./'));
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) (await caches.open(CACHE_VERSION)).put(request, response.clone());
      return response;
    } catch (error) { return cached || Response.error(); }
  })());
});
