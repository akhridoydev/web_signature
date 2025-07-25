'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9faf625a6fe1dcbaba96c5224249e916",
"version.json": "7b43a6f1eaef86721d5fa972dd298a96",
"index.html": "070f52df58d69b5b6814a8d6b152a2de",
"/": "070f52df58d69b5b6814a8d6b152a2de",
"main.dart.js": "fc1329734a6eb9d611ae521836ead542",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"README.md": "7a5278c2062aad0aeae146e9c6234b4c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9c96b2ca92bc8917c698639f3db3dc3c",
".git/config": "b693e3f6c278b90261a634c565f870d8",
".git/objects/61/a21a35847595edb16efe5bbfdc19933fbd0d13": "83635cf81e3a51f7f7364794b6dcca79",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/68/45ba484f0886ae5a9f2aeb3a2e4826a0c81768": "bc3b4335b980716a5cbbf10715e86dd7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/31753f8d01382a3d5e5737f69075edd7429277": "5b73d316b995df9921d25961f075ca96",
".git/objects/32/be71d03387beec291dd1396be987f56b12134b": "abeb1107c623b74292f5fc8d484839bb",
".git/objects/32/a7a836229eaa9ea1db0c27f8b4e66e9b337131": "107aa17e59ee71dda44cdbbef9db916d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/0e/fcca999cf2e9fa29b3ce59188f3a0bc7cdc8d0": "bee65d46abe0cfbf14a30f0a784f8a1d",
".git/objects/a4/3ad92ba953ed0a45fa7e5e1170427645b47335": "ab36d00b3a0872cedc38eaa2507b01b0",
".git/objects/a3/a896a0c72d9889928e9bd15373ae23c012a728": "1011bec0623a0ab6b0ca374b69002e01",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/09af6674a00967d712a46b0b764453f5019094": "8aa249ca32f114f18f7f729f63eb9168",
".git/objects/b3/146d4ffaa5ed84ebf8c3e404739e5cf682847b": "d15018b965fc94f468f95e242390326b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/0165eb74c5fb0e21d013dd485fa7751d7a34d4": "e7e12a65d426b4cab6c0e7b3ea357804",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/e9b357d688f90cdca19d0436cac65e2e5f9c05": "c99d1170e720675e2ed3eabaa1ca6755",
".git/objects/fd/073e9b267656b7e979f483f910d70454dc173e": "1605d2eecd62040040eaa8a3c56cd7a6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/27/d31663287296b75ad1208d019613c84f22ba5b": "6fc83d70228cbd6ac8e5426f146e55e1",
".git/objects/7c/eec33cb310fc8e26df7855807dd83c2b054238": "7c5d5b09fd68590b44c664c9845bd715",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/7cc5a7480ed1366c3178632b68c28d8d8602fa": "8e63cf00e00b2fe54e5250d82054830c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/5310f791e80ce409a20f1ab9a38ebce1206393": "42509fe1fee3ea7b498f4ac5d76a3b9c",
".git/objects/28/de18d95f95f5a01f82f9ee0a69dfbf9be52769": "f8ca06af2a6420ee41fa0b2d47d0962c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/3ccf66b2f936c283f81143a607baeef19d6786": "d462b74acb311ad7c2f203881d064a2f",
".git/objects/2a/c765271cc3586b780bc5539fb59155f6615127": "104dd080975b5e4c1e85d2e5b84f0043",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/62/d0ac6c7e73b5c9b2a807a46114587c9bfcc099": "2a9267233fc9d1556a86abf9d1132a27",
".git/objects/54/a3cf9016474b180bb271183313855bb9b1af44": "7f6523d9ea5de21b29d804c6df91f21c",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/4bbc93064ddd12d309afee0118a0c86d66cbcf": "252cf71c2721a3fe46d5b34b7cb51f28",
".git/objects/06/c88e8d8e15659788884d7486adc5e71eaf4380": "3394f899c6a556b21a29e5d5077517da",
".git/objects/6c/6e377ced9dd53353d92df686e42d84a638b26a": "e235dba92f3bf704620fcc144098ea72",
".git/objects/6c/6812305fa051cbe7dcd31f2a3f7b589a651bf7": "30b1bae64e415974334ad53b02a1aac7",
".git/objects/39/12784b8117156eb5431c8fabb3e381952cd2d4": "b667c5887102279ff4908d32f354e359",
".git/objects/39/c27d4e8556d7a2310f053d4d5b7ff06367585e": "919373b599eb09f3b2c26d8df8228e18",
".git/objects/0f/1773de0e9d35671b9e4595f36ed83a8f91425b": "57b2d0be15923bf6a22753e34001c110",
".git/objects/0a/f94a73db220f2fe677174cee5f67d5526fd23c": "89e6403ce40f735dc6d85fbf61e1546d",
".git/objects/bf/13cdd62cda024f804534414ce9a3d948748f6f": "4df396866f23ebfe9c332957bda04f7b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/79dfd4dbecdfdb6df572aff2cdd6f857ead0ab": "fa2006ff773771e9fe7f4e22e969aeac",
".git/objects/a0/d0a9366bbe78cf0db955ae81a3bdf78dcb2ffc": "314ce9ab943b55715a6823ef7718aad4",
".git/objects/dc/cb10c8c76280c46c4c9a79685c6a5e14643eed": "6bdd1a2f0be82da57bd7f19389d849bf",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/ba96547a485ab9d92223c9d1a1b081ca8b5964": "b343fe2c7ec0aca67b11195bfed35822",
".git/objects/d2/cc6927f83bd829c098243cbf1e28eb7031a379": "25a11b14119b8d7cfac7456fd7dbd20d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/d0ff309f0fd7120a91c168486259050fa1e287": "02b725c0c200618dc1980279f4a9268f",
".git/objects/a6/2967a8ae9227cf50b931e3d814b70569b0104d": "a763d0babbe57765c709e93de4e49058",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/61d9ae37594c0d957c7ed2fb0502ee4f81eb78": "bcaef27a248bac976530b40f4bf6ee10",
".git/objects/f9/2d66dee32920295d4037170b1833b520e686d2": "8157628e783e0cad196c3a53f1077530",
".git/objects/f9/6a481f69fbdfe1b82b81816caf1c16ade5f39c": "318a62f1706f5e9e980e915bbf94c500",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/d5a6faa1ddef7d1ef4394a0e90707ff84facc2": "79b5f86faed3efc92bba5fe35584e73e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/22b5523eb31d12eb792ed9c6431d0e7a50b346": "544c70dbeeb98b896bad2219bbcf2d48",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/40c38bc402965a6faaf5645de2e3f8a5f07eab": "81c3f22d151fcc66e7928faebcf8147a",
".git/objects/2c/9182f32619f82fd946a17561b2735eee846afc": "cc89657439c9dbc782f83ec226c99350",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/40/b35a04c074a2ee6a9895bc60f11676c20e98fc": "9b9e4df0a19d5479767c371287cf5182",
".git/objects/13/b4eefad24b37fac3264ab6f68b74ee4997a5b4": "670c78130fcbfb9760438ae749bf389c",
".git/objects/13/b94f92ad37152a80b0c8c8fee5cf1f62a5498d": "92de3c41c40154927c956a8200c1665d",
".git/objects/22/77d7e6bfcdb9ea0e6bcc27a0c9892b41b9b199": "dea6a939b5a8896d19fdfaa9aff86e17",
".git/objects/25/921c5edc0385f3ab22d274906fe9bd3faed5c6": "3144b54b4837ae5c63eab12446a46d35",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d7b19a3031d42787c9853ce9d2fc7d8",
".git/logs/refs/heads/main": "ecd0aaa244777214bce2d243688c01ee",
".git/logs/refs/remotes/origin/gh-pages": "b378e4086a6ddfa4319e7a8c593c4ebc",
".git/logs/refs/remotes/origin/main": "38620eb22a1acbaa2d1f97a03c2d14f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "62f3008d5bfe86d85df07e3dfc60988d",
".git/refs/remotes/origin/gh-pages": "67266389377e0fa504987426fd8a3507",
".git/refs/remotes/origin/main": "62f3008d5bfe86d85df07e3dfc60988d",
".git/index": "55563af19b711bfbac40030036bf77bf",
".git/COMMIT_EDITMSG": "6970a9aa733f07060d71f43f59d31082",
".git/FETCH_HEAD": "987c554b0b8d1a79682c9f6e0ddf99a8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "3a494b1658372064342cdeb4546951a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
