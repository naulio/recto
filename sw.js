/* Recto · service worker : l'app reste utilisable hors ligne.
   Réseau d'abord (toujours la dernière version quand on est connecté), cache en secours.
   À chaque nouvelle version : changer V ici, dans index.html et dans assets/app.js. */
const V = "5";
const CACHE = "recto-v" + V;
const CORE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "assets/style.css?v=" + V,
  "assets/fx.js?v=" + V,
  "assets/app.js?v=" + V,
  "contenus/bibliotheque.js?v=" + V,
  "contenus/lecons/le-langage.js?v=" + V,
  "contenus/lecons/l-art.js?v=" + V,
  "contenus/livres/discours-de-la-methode.js?v=" + V,
  "assets/icons/apple-touch-icon.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("recto-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const fonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (url.origin !== location.origin && !fonts) return;
  if (fonts) {
    /* Polices : cache d'abord, elles ne changent pas */
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
    return;
  }
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || (req.mode === "navigate" ? caches.match("index.html") : undefined)))
  );
});
