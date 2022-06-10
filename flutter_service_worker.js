'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "93d6a5b2353e7be46334c4075d537624",
"index.html": "13d19d7c12529610fbe0809ba418dbd7",
"/": "13d19d7c12529610fbe0809ba418dbd7",
"main.dart.js": "8264f56ae4242886f8d228f25e37d808",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "1758c1e8b7a46868d50054e0f84ca5b7",
"icons/Icon-192.png": "9dc0bfe7dcbbbb26b6ad49c235914760",
"icons/Icon-maskable-192.png": "39a6a4106e711cbab8e27e23e903753e",
"icons/Icon-maskable-512.png": "4e621628835ec20b79471edf6b6cf6a1",
"icons/Icon-512.png": "1758c1e8b7a46868d50054e0f84ca5b7",
"manifest.json": "477ddee7ed14009bfb8632b0fb669e6d",
"assets/AssetManifest.json": "eea6872e6adcb6794fb3e5ac53a8d071",
"assets/NOTICES": "6f52704f82ff6c14453c14e61cf60cba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Laufen.jpg": "15660f928626de92aef00546e1b9e760",
"assets/assets/images/Kinder.jpg": "c2913d4dfa5956129914fa9b6d1d7507",
"assets/assets/images/Fortbewegungsmittel.jpg": "2e74b8ca1f06a70a9b0f0ce283f82286",
"assets/assets/images/S%25C3%25BC%25C3%259Figkeiten.jpg": "9efa7a72f714377b6234550a49aceb8f",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Mhhhh.mp3": "7032007111dbf1525739459f7a37631b",
"assets/assets/sounds/Laufen_Schnelles%2520Laufen.mp3": "a3a67c5801c2c8a8acd4c3b03c4c6657",
"assets/assets/sounds/Kinder_Spieluhr.mp3": "c84efa2d012d36cc440b4fbb3421b378",
"assets/assets/sounds/Kinder_Spielplatz.mp3": "539da50a3ce1c124bacb3d6e7c313703",
"assets/assets/sounds/Laufen_Schritte%2520im%2520Wasser.mp3": "5f26fd8e508e27f09fd336868eb9c4b4",
"assets/assets/sounds/Fortbewegungsmittel_Auto%2520springt%2520nicht%2520an.mp3": "907d7a1e4a33d1c7d6dfc911ce9399b5",
"assets/assets/sounds/Laufen_Spazieren%2520im%2520Wald.mp3": "207bc8eb202c2d2b331ac95a2ab96ecf",
"assets/assets/sounds/Kinder_Schreiendes%2520Baby.mp3": "3823e8e1ba0c7db6b0a3907610407027",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Jahrmarkt.mp3": "72ee6aadb904389fef8b47fad24ae14f",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Schlecken.mp3": "eefbd6742373e7bc9f8bc7adf9d5ccfe",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Verpackung%2520%25C3%25B6ffnen.mp3": "83b830c40116a251f4558d4b5ee6148c",
"assets/assets/sounds/Kinder_Schlafendes%2520Kind.mp3": "617cd33a5b283d344ebc1be66099aaab",
"assets/assets/sounds/Fortbewegungsmittel_Stadtverkehr.mp3": "5af606cb3d2380731ab27eb85c84b1d1",
"assets/assets/sounds/Fortbewegungsmittel_D%25C3%25BCsenjet.mp3": "edc1f89744d34563f46841952cd2930e",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Chips%2520essen.mp3": "e0c65513b38c2821c0876508ef60dee4",
"assets/assets/sounds/Fortbewegungsmittel_Hoverboard.mp3": "6f80a72bc1c4945c65e8cd88d04bb540",
"assets/assets/sounds/Kinder_%25C3%259Cberraschte%2520Kinder.mp3": "9e169401fc7d0c03567c6d92d764df14",
"assets/assets/sounds/Fortbewegungsmittel_Fahrradklingel.mp3": "0d5969fe2803e024da8630f6ed7de96e",
"assets/assets/sounds/Laufen_Au%25C3%259Fer%2520Atem.mp3": "255e547c1f99d5257801c3bf0d7873a0",
"assets/assets/sounds/Laufen_Wandern%2520im%2520Schnee.mp3": "3ab0b3163499b0b8f90c0d9d1b063608",
"assets/assets/sounds/Laufen_Quietschende%2520Schuhe.mp3": "58d4fd3488178b55b9b479e78501e01f",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Schl%25C3%25BCrfen.mp3": "b3a355dbfa1022fa50071f6eb18241ac",
"assets/assets/sounds/Fortbewegungsmittel_Skatehalle.mp3": "fcaaa710b065a1d4638223a73586d273",
"assets/assets/sounds/Kinder_Lachendes%2520Baby.mp3": "33de4f5dab12ff8b9711f55da7e5db77",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
