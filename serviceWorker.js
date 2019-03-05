self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v4').then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/styles.css",
        "/assets/headervideo.mp4",
        "/assets/headervideo.webm",
        "/assets/headervideo.ogg",
        "/images/append.jpg",
        "/images/ascending.png",
        "/images/brand.png",
        "/images/buildingblocks.png",
        "/images/burger.jpg",
        "/images/calculator.jpg",
        "/images/calendar.jpeg",
        "/images/detect.jpg",
        "/images/dynamicbrail.png",
        "/images/flicker.jpg",
        "/images/hooks.jpg",
        "/images/ifelse.jpg",
        "/images/money.jpg",
        "/images/myphoto.jpg",
        "/images/restaurant.jpg",
        "/images/storage.jpg",
        "/images/videoa1.jpg",
        "/images/zipcodeCity.jpeg",
        "/js/scripts.js"
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  var cacheKeeplist = ['v4'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
