/* KhataBook Pro service worker: network first, falls back to the last cached copy when offline. */
const V='khata-v1',CORE=['admin.html','config.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;
 const u=new URL(r.url);if(!(u.origin===location.origin||u.hostname==='cdnjs.cloudflare.com'))return;
 e.respondWith(fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp)).catch(()=>{})}return res})
  .catch(()=>caches.match(r).then(m=>m||(r.mode==='navigate'&&u.pathname.endsWith('admin.html')?caches.match('admin.html'):Response.error()))));
});
