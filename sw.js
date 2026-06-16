const CACHE = "swa-learn-v1";
const ASSETS = [
  "/swa-learn/",
  "/swa-learn/login.html",
  "/swa-learn/dashboard.html",
  "/swa-learn/index.html",
  "/swa-learn/manifest.json",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  // Network first for Firebase, cache first for app files
  if(e.request.url.includes("firebase") ||
     e.request.url.includes("gstatic") ||
     e.request.url.includes("googleapis")){
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      });
      return cached || network;
    })
  );
});
