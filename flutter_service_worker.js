'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d8c44231893b0ddd5d86b8f5313c2e5b",
"assets/assets/1062086%2520-%2520Copy.jpg": "7c324bcfdfc152b3ec4001eb429b5255",
"assets/assets/340174-Digital-Art-Kaonashi-Spirited-Away-Anime.jpg": "3fcdccfcdc163b7b6e3d263d27ebcc56",
"assets/assets/62-628052_howl-s-moving-castle-hayao-miyazaki-studio-ghibli%2520-%2520Copy.jpg": "10b4d03350dc0e8bc26b3ba902b90f19",
"assets/assets/996679-Studio-Ghibli-anime-Hauru-no-Ugoku-Shiro-Howl039s.png": "a960544efa981f8535dca4e38387caf3",
"assets/assets/anime-spirited-away-studio-ghibli-hayao-miyazaki-wallpaper-preview.jpg": "72d57ab1199c9132c3d8382e71692350",
"assets/assets/anime-studio-ghibli-howl-s-moving-castle-wallpaper-preview.jpg": "bbd8fc78d6b91e5bdf23675078f4f6d6",
"assets/assets/castle-in-the-sky.jpg": "ede60c9c1ef223f7a230d73886aab778",
"assets/assets/dk.jpg": "abd162e86f4b21a840532af612c737f5",
"assets/assets/ghost%2520Pro.png": "19d54ce0b6b464f618394c101fa10f47",
"assets/assets/grave-of-the-fireflies.jpg": "f46d418d3b1b7189498d0de9a39fddb2",
"assets/assets/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-preview%2520-%2520Copy.jpg": "b9546fe92eeb222d6eb4d95d9b14eff3",
"assets/assets/kiki%2520delivery%2520service.png": "dc0ccbe4fc4731d12b1bebd038558991",
"assets/assets/My-Neighbor-Totoro.jpg": "67f73aa6cb51a5b01b6f3c5997dd9afa",
"assets/assets/only-yesterday.jpg": "4ca46abd913a4035780e383644dbfa20",
"assets/assets/pom-poko.jpg": "a7f415e09173710a2699c5d058535226",
"assets/assets/porco-rosso.jpg": "73ba892aa1d1423649bcba2c63acaaf9",
"assets/assets/Princess-Mononoke.jpg": "d85880b4eb7d2300959416de2cdae4fd",
"assets/assets/spirited-away-wallpaper-7%2520-%2520Copy.jpg": "d7e06458c0d2ce518ba39d5bf2f512ed",
"assets/assets/studio-ghibli-upscaled--howls-moving-castle-wallpaper.jpg": "2c93acd4959656f39afa2cf1aee087a4",
"assets/assets/Studio_Ghibli_logo.svg.png": "28560554419f425d1fb6c948f33e7435",
"assets/assets/the-tale-of-princess-kaguya.jpg": "e567ee2d4cdba0135b8ba0de82b47422",
"assets/assets/the-wind-rises.jpg": "e8280a509a23115b6e3fba86914784ee",
"assets/assets/whisper-of-the-heart.jpg": "4c4e9b119ca22cc07084d0e1bf5a971a",
"assets/assetsGifs/1.gif": "fe39d31c2b07b668e2890290584a6d8e",
"assets/assetsGifs/10.gif": "19887c36d114e7aeb0587ac1ff9987e6",
"assets/assetsGifs/11.png": "83408aef6eeee7617f34b924dd107c04",
"assets/assetsGifs/1111.png": "a3db8b1087dc90efb0ad85e3d79e2fcf",
"assets/assetsGifs/2.gif": "29f2b23945cd934df20f2f1b973c1dcb",
"assets/assetsGifs/22.png": "2662b088bf024d082d7315ef3bfa046a",
"assets/assetsGifs/222.png": "a2742e2f5ff9f27b09ac298a4bd56657",
"assets/assetsGifs/3.gif": "0149a0e9822e415294ab2784fe1192ea",
"assets/assetsGifs/4.gif": "20aa9aea4b93272c73a0fb3e25626776",
"assets/assetsGifs/6.gif": "e702541582cc83cd2b072bcc4cd5aaf8",
"assets/assetsGifs/7.gif": "b0c5d4eef2aee4d2d51e807e1359098d",
"assets/assetsGifs/8.gif": "6ad106fad669b888df5e5c1e74ec0d53",
"assets/assetsGifs/9.gif": "7948786230475704944461cccb22c6f0",
"assets/assetsGifs/all%2520Ghibli1.png": "41931b05f92206334f6448e08305e81b",
"assets/assetsGifs/all%2520ghibli2.jpg": "edbc45f9eed07077fde44704c71bc99a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "cd32310a5ccccf629d279634a20bb463",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "776eab2567e105f36023f964acc93f0b",
"/": "776eab2567e105f36023f964acc93f0b",
"main.dart.js": "cae7582ea70ee16ee8fa8a5fe5e5346e",
"manifest.json": "edab4520617c16fc8c842ec42ffa010f",
"version.json": "5237088f96bc6663cd685e5b98e2ebc5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
