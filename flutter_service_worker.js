'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "93d6a5b2353e7be46334c4075d537624",
"index.html": "1514347dcc915d85c932570c4d386b21",
"/": "1514347dcc915d85c932570c4d386b21",
"main.dart.js": "2686275833a38dc93e2a0b2d7fdc084f",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "1758c1e8b7a46868d50054e0f84ca5b7",
"icons/Icon-192.png": "9dc0bfe7dcbbbb26b6ad49c235914760",
"icons/Icon-maskable-192.png": "39a6a4106e711cbab8e27e23e903753e",
"icons/Icon-maskable-512.png": "4e621628835ec20b79471edf6b6cf6a1",
"icons/Icon-512.png": "1758c1e8b7a46868d50054e0f84ca5b7",
"manifest.json": "477ddee7ed14009bfb8632b0fb669e6d",
"assets/AssetManifest.json": "d9550eb1ddd7e7f5e8d18e11693ca23d",
"assets/NOTICES": "6f52704f82ff6c14453c14e61cf60cba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Laufen.jpg": "15660f928626de92aef00546e1b9e760",
"assets/assets/images/Kinder.jpg": "c2913d4dfa5956129914fa9b6d1d7507",
"assets/assets/images/Musik.jpg": "4779c94e7683982ae6a0e91a4a96c5c3",
"assets/assets/images/Fortbewegungsmittel.jpg": "2e74b8ca1f06a70a9b0f0ce283f82286",
"assets/assets/images/Spezialeffekte.jpg": "782989687a19f85b16b2f00b853bfab2",
"assets/assets/images/S%25C3%25BC%25C3%259Figkeiten.jpg": "9efa7a72f714377b6234550a49aceb8f",
"assets/assets/sounds/Musik_Traurige%2520Musik.mp3": "5f61abbbc993719e94277738aaa03ca0",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Mhhhh.mp3": "4ebecd339331f53817f1036236f82c12",
"assets/assets/sounds/Musik_Lustige%2520Musik.mp3": "53cac416541fc27937942691bc6a19f7",
"assets/assets/sounds/Laufen_Schnelles%2520Laufen.mp3": "80d6c95e2840861bdace47339e759a79",
"assets/assets/sounds/Spezialeffekte_Schnarchen.mp3": "ff55a35309901f6f8f182b8b98643e17",
"assets/assets/sounds/Musik_Ruhige%2520Musik.mp3": "856fe2685c705a558d24e5a971628a88",
"assets/assets/sounds/Spezialeffekte_Signalhorn.mp3": "8f32ce574d9c5cb42a0efaff7f43e7d1",
"assets/assets/sounds/Spezialeffekte_Oh%2520Yeah.mp3": "c09da7de659f3b274bbe18d50653b190",
"assets/assets/sounds/Kinder_Spieluhr.mp3": "11df74d1b61b7eb7b545f2582aa7796e",
"assets/assets/sounds/Musik_Dramatische%2520Musik.mp3": "95dc3543a5d8580fb62f847e4496ce00",
"assets/assets/sounds/Kinder_Spielplatz.mp3": "1ecdfd1407bc4ea451a60e7cf0cadb2c",
"assets/assets/sounds/Spezialeffekte_Traum.mp3": "68fd6f61e2aeeb628cc7285a57340ae8",
"assets/assets/sounds/Spezialeffekte_Vorbeihuschen.mp3": "6ea9bc6211dc1cd3b5f10193166b92a4",
"assets/assets/sounds/Laufen_Schritte%2520im%2520Wasser.mp3": "83abaf3604805498b0d03a40ff897472",
"assets/assets/sounds/Fortbewegungsmittel_Auto%2520springt%2520nicht%2520an.mp3": "e68c8ad787aa2c299d243a8cc757dbc5",
"assets/assets/sounds/Spezialeffekte_Wind.mp3": "299d2a3b0e1deaa8e572d09113265916",
"assets/assets/sounds/Laufen_Spazieren%2520im%2520Wald.mp3": "82b74f1f1a0992598ec94115f25afeee",
"assets/assets/sounds/Kinder_Schreiendes%2520Baby.mp3": "b3d9d426a673d0e5d7cf6bb6e614ff71",
"assets/assets/sounds/Spezialeffekte_Applaus.mp3": "ea9e98659aa2d91f8db2516e92d2194c",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Jahrmarkt.mp3": "2f3652cf904a085f61c3ba8c67525101",
"assets/assets/sounds/Musik_Fr%25C3%25B6hliche%2520Musik.mp3": "e7f2773c94339effd6894faf81faa237",
"assets/assets/sounds/Spezialeffekte_Jubel.mp3": "5d4ccfb376e0f9b49c30db49e902f90d",
"assets/assets/sounds/Spezialeffekte_Vogelgezwitscher.mp3": "b91d96fce612e79f5a194856385cea48",
"assets/assets/sounds/Musik_Freundliche%2520Musik.mp3": "1966af0a58db241a6d3e0ddf38340601",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Schlecken.mp3": "a8d611990e508e7eee3cbd0a7367a40d",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Verpackung%2520%25C3%25B6ffnen.mp3": "15f51fb9601a52095b412b56e5927c2b",
"assets/assets/sounds/Kinder_Schlafendes%2520Kind.mp3": "b280dbfb34f8b7799f325146a79a47de",
"assets/assets/sounds/Fortbewegungsmittel_Stadtverkehr.mp3": "35bdd1732a59699968a19e27435a59e1",
"assets/assets/sounds/Fortbewegungsmittel_D%25C3%25BCsenjet.mp3": "77df754f4326dec680e21b4656ef6f95",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Chips%2520essen.mp3": "810fa87e6beccac1dd79cab8906c3b41",
"assets/assets/sounds/Musik_Spannende%2520Musik.mp3": "ed147857117acdd4ea7830979a2fed10",
"assets/assets/sounds/Musik_Schlagzeugmusik.mp3": "05b25bf6a689eaa4f3d67691fa36b3c6",
"assets/assets/sounds/Fortbewegungsmittel_Hoverboard.mp3": "aee3f9cbb9cf4e481a71c1776a1d2c3a",
"assets/assets/sounds/Kinder_%25C3%259Cberraschte%2520Kinder.mp3": "8279d594fa1f2ddec870dd0f272ae35b",
"assets/assets/sounds/Spezialeffekte_Wolfsgeheul.mp3": "125b94190efa244cfdc200938d848cbe",
"assets/assets/sounds/Fortbewegungsmittel_Fahrradklingel.mp3": "dd58a07e8c204329917be78bd2703326",
"assets/assets/sounds/Laufen_Au%25C3%259Fer%2520Atem.mp3": "15ca975d6f5822ef5757f29da1b634da",
"assets/assets/sounds/Laufen_Wandern%2520im%2520Schnee.mp3": "f0c041f11c2192c9e9291c2ce4e2fe77",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Schmatzen.mp3": "2eb06a8c54be99c957447a80adb92e6a",
"assets/assets/sounds/Laufen_Quietschende%2520Schuhe.mp3": "709dd7d22a6d30bfc895848571d00a74",
"assets/assets/sounds/S%25C3%25BC%25C3%259Figkeiten_Schl%25C3%25BCrfen.mp3": "ee86149a8f3b44afcffd3b02ab5cf0e9",
"assets/assets/sounds/Fortbewegungsmittel_Skatehalle.mp3": "007db3786e22e75b0ccb94aa7a70ce4c",
"assets/assets/sounds/Kinder_Lachendes%2520Baby.mp3": "fc0a0419fcee14be14902ef6fa2366a2",
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
