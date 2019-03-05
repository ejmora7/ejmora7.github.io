self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/styles.css",
        "/images/append.jpg",
        "/images/ascending.png",
        "/images/brand.png",
        "/images/buildingblocks.png",
        "/images/burger.jpg",
        "/images/calculator.jpg",
        "/images/calendar.jpeg",
        "/images/detect.jpg",
        "/images/dynamicbrail.jpg",
        "/images/flicker.jpg",
        "/images/hooks.jpg",
        "/images/ifelse.jpg",
        "/images/money.jpg",
        "/images/myphoto.jpg",
        "/images/restaurant.jpg",
        "/images/storage.jpg",
        "/images/video1.jpg",
        "/images/zipcodeCity.jpeg",
        "/js/scripts.js"
      ]);
    })
  );
});
