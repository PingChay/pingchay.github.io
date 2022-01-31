'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f2f758bcf807b94befa6b4936674521c",
"index.html": "2fbe6268a47d8398dbda8f151e5327a4",
"/": "2fbe6268a47d8398dbda8f151e5327a4",
"styles.css": "31e47030e7a8f9e4ea4c41e3d62d5d2f",
"main.dart.js": "7e58d7593ce0f82820cf587469d1ef88",
"icons/favicon.ico": "b503c9d3c95e1d2d220b7496bddfddc7",
"icons/Icon-192.png": "36cdd341ca58807b741e7bb1c4f2a692",
"icons/Icon-maskable-192.png": "36cdd341ca58807b741e7bb1c4f2a692",
"icons/Icon-maskable-512.png": "fabbb8498860a743bd8d5813bc48c71f",
"icons/Icon-512.png": "fabbb8498860a743bd8d5813bc48c71f",
"manifest.json": "d30e37d8670cf37420c235e04558410c",
"assets/AssetManifest.json": "80df91850a1c4cb0280bbe2a8f8c2086",
"assets/NOTICES": "459fdc55854b48e963978e8dd2e98e4a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/lineman-logo.jpeg": "b44ec2f3732371fa008ab5e943e029ed",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/lineman-logo.jpeg": "0842889290e95f9307d85db01db45f67",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/2.0x/menu.png": "c58ec4b311ef940c75c2e1be73e742da",
"assets/assets/images/2.0x/robinhood-logo.jpeg": "72832417aa97820a504533c1b08b4681",
"assets/assets/images/2.0x/product2.jpg": "0689bf03b1c23907bb6248760b14bbdb",
"assets/assets/images/2.0x/product3.jpg": "30b37d3b452bca728d7e4e92c87fa451",
"assets/assets/images/2.0x/product1.jpg": "9f4ec38561a4a4f20191af2a08b281db",
"assets/assets/images/2.0x/product4.jpg": "2bceb9c587d555158f4fc8e5b9884b71",
"assets/assets/images/2.0x/product5.jpg": "f87a563a762fdc7b01523ce9e143e3a3",
"assets/assets/images/2.0x/product7.jpg": "6654a246d36d082b6ea9ef004e275e4e",
"assets/assets/images/2.0x/product6.jpg": "05750cc2214ffbc78a1c50592f330f38",
"assets/assets/images/3.0x/lineman-logo.jpeg": "5f1755667fe125612c30e995226d0c4c",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/3.0x/menu.png": "1a4bfc14182cca1c251f33140d4ca67d",
"assets/assets/images/3.0x/robinhood-logo.jpeg": "68298ea0c383bf7c0170ead3ef2c1267",
"assets/assets/images/3.0x/product2.jpg": "4d6f047cae03546e716eac8fbf23a6fb",
"assets/assets/images/3.0x/product3.jpg": "79398e7e7366bba7150e8c9ab6bc6f38",
"assets/assets/images/3.0x/product1.jpg": "99749705f7f4782fdb4c5e3f390275aa",
"assets/assets/images/3.0x/product4.jpg": "662264bec3978a28ef75fc075d8fee22",
"assets/assets/images/3.0x/product5.jpg": "03a1d373f230b53031c431d7385a5d7f",
"assets/assets/images/3.0x/product7.jpg": "6d46b8d0625ab38bc420a8930943a941",
"assets/assets/images/3.0x/product6.jpg": "43915d9179891713abf1c2f857fa8c32",
"assets/assets/images/menu.png": "6b291f10ed29265f34178b3d435f160d",
"assets/assets/images/robinhood-logo.jpeg": "238fffdf3651dacdb5b88649a9fe2a1e",
"assets/assets/images/product2.jpg": "7e9736971165c67994b1b13b5ff2cab2",
"assets/assets/images/product3.jpg": "6941f615dd074f79bb9f37f7dc269733",
"assets/assets/images/product1.jpg": "01227e6646dab88c555b7ce9cb91ad8f",
"assets/assets/images/product4.jpg": "3d87b69bf74f99f7794dec6aac6e49b9",
"assets/assets/images/product5.jpg": "802d8a05b5a724d060f2b9fc8b778c72",
"assets/assets/images/product7.jpg": "d576a257e20b32778d927994a45e7349",
"assets/assets/images/product6.jpg": "d802ab881eefdc699d91ffdefd58fee8",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
