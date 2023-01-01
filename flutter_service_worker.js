'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "b77a42e1098481e93c677c6f26c337f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f7695df10d779e7d918df08985b37efc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dba46cb553e43782fcc4b998553645f6",
".git/logs/refs/heads/main": "403cc605ed525763ee5014928e42a141",
".git/logs/refs/remotes/origin/main": "10667e5b7864e42a76d87d7c241d25c0",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/12e7da626ca2f959eca850c806779ba55dbfbd": "c094fa0b00e6ea2120d2a30cd1da087e",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/08/4f9c0f5365952d4d860431a1c2dca147e4a9b5": "dab2b7ce77b85dd7850aef2e03638cf6",
".git/objects/0c/101ba9905f9084c06e906fb8242637bf7fa8e0": "4fd36ce417ea719429ff78ce4fd35d5b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/92e3d9ff3adfc826d9c33a30e40b1f1424310f": "4726b96fc89ea7f4b026b8c4f3d69e67",
".git/objects/11/469f6f23cb92d50fcc7c457d6dc5d5f7815051": "6eaf2abc174cd2eba4930d9ebeb1abf1",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/364e7d014ee55d6074070103a7025cef7ff486": "a0cd2dad5bea49393dda21d7ebe3839a",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/16/65e8661e4156ffbc77c6063f0bb1ce68abb12d": "ba67b127ab365f1e6fa0ae53fba9b0ab",
".git/objects/1b/5eaa361c7306b4246c48497c79475c0e05c5e2": "797c30b38f4b43082bf674ed21553c74",
".git/objects/1e/1994247cafc8270ae5cdc37ee1ee9c7ec50d5d": "2f52781da5449601fed1b99de107976d",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/4c769993d67cd95cb94ec9ab42f967b9878178": "ba1778bf5d0a7b414fe724770cd604f3",
".git/objects/2a/60c530613eaccc795b3006a412159a0d75c26e": "01d923bd5f50532271b54c7339f39010",
".git/objects/2b/010f8cec1c1aba56323a7818b27925d8b3ff49": "33e4d9e236b8894aac29b92daeaf3906",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/277afb231f7613a49d983217c1aba871741433": "9047448a3d09251b8161710e65810e36",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/f316e0c839cdb9823773800f7a5d3e615ed3d3": "3e78f75ea6c4d00931da55c3ed731d47",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/3b/d015ac6a02dbfea1646e5479b6b9f00ef9243a": "562bc670dfc0f830c2ef195a7f405436",
".git/objects/3c/4024f70d375acce0be82694ea26431199fe2f1": "afb463814d97e36bc70c1ea1c8b4784b",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/40/8d97558acc9aa262379f9726f7ca49f01d8f6a": "08a339d5c6ab01f228ebd100578bd8e0",
".git/objects/43/d27391ef503225a99e96a9a7ba77a53eec7211": "f322c90fe29c1974a1f803e16c48e3be",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/48/68a4f8f54ad1faa0cd3d7e8bb2627e8aa6c993": "4bcf937109b42607151d06611a858ae8",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/e7209745d38c0065a5e243688264bbeb9c65bf": "aea58e7bd5985b7b236dce967aa2dbc2",
".git/objects/54/44ab998e8ed0d106bfc0cf02a53f15e340c79e": "684d892fb79acf638ed8ae1dd70930d9",
".git/objects/57/9882a9e53cbbdb0b8e312b4253201dcd255174": "d47dcb6b4d0f39c0c2d52dcf80b38d57",
".git/objects/58/6a9c075b6e8a2b1d80866254fe22f10bbcc946": "5574487f00b4532fca60e60cecb74e9a",
".git/objects/69/c9deaa07c0b84109e7b53a4f95d0a67859c3c3": "395b903286c644aea5127de45d65c96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/b91d6373e1c47b2da8cc731959b8286773f90d": "a358a721c257997395313adae4bae5cb",
".git/objects/6e/d12ca1ac22b14bbef8d5ef7d2a6a8d9b2efd4c": "86cc8a690ed2f3544e08370765b85d13",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/72/e30c06f09bc653bb443d2070ad01874308acb4": "b5e100098a318c22ada95e58a384bdbf",
".git/objects/74/4e140a0dd4ed447dd608d22e448fb3a5dfbd6e": "93793396b9aca0c8b369185b53c7c6d0",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/b26ded45538d146a32d2f6b3b2590cfc0405be": "f6e1e0b0a14a50860c03a0bb7bc1f201",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/82/ecdc39fd0a82c3446a74b4ed002c4dac5f2f9f": "707bf8f5485ba16833f736537ee9efdd",
".git/objects/83/b7de83fc36fd02cec1b2b187945cbf6e32e791": "daf39d8e6a5d522f8193fa06b1ad2bac",
".git/objects/87/08fa5dbd8aa19d06a3b2628f520353b93bb078": "f724f9da4d70f836e7e5a190397f5c84",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8d/2ae7c6d75ac7ba3299b76029779622acd35059": "4a5dbff256ca4b156c3dc3981023a047",
".git/objects/8d/55a9af6f4bb61f0ea2ee99ef93cdfad798ea1b": "afdc114f2761487972f408364d95f357",
".git/objects/8e/033d80c344ca833a1c1276d81a02bf8bfc1c21": "a1d32878946d3dff76c2b91703b64991",
".git/objects/8e/c8edaddfd8d79739a4d5afe1891788653d68c7": "697b672f6d1e79076554ce6e9410c4aa",
".git/objects/8e/f6caedd85d97123276c30a72fcd61e1a18c6dd": "a3fedd8a15bd5e7f8b1fb344a2cfdceb",
".git/objects/91/5191128d7124ac3e875149acf7ef7d22c5f0c7": "6c354df29ed625d67b10cfe89d9201b0",
".git/objects/93/df3059bd52d2683d8761088630472a4c980f46": "f79afb152fdc903d0ac575617597a44c",
".git/objects/9e/6252f4c9b10adddffa5d0a10fb6afae5be41ee": "3b6bcefe37237a10ec55863a7da8f71b",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/7419bbd7dbc1dc67f71f83478cd52545da71a4": "ab007da044686cd68bff823289231fae",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/172ca3a2d401f9a7c46310af3d973c9986fc39": "83718042858ba81d8b3b84386144d588",
".git/objects/a9/744a9a615d4569648187c1e1ca1700018c8d60": "872edd59bc522f741bde6862577f4a06",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/ba15be09afb77004bd306be1342c2aa2549398": "f6aa9efb6f427e7a5b67b073ad4fc483",
".git/objects/af/354009de80f822716d2baf93a62f66fcc1ba11": "923511ff6e72c06879e920c60b54ff74",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/b2/329e093ba65132701fa5f0b412f36aac9f857c": "cfb39dce9dd5f22ac428cc06b34d13db",
".git/objects/b2/c6aca57bc0d92ab3197d595766bf9285deea00": "a9be37e0f080009d8095a09eb2a7a1c8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/d73bbf3416d770fb8a80ead8c676584153ccfb": "f767ac7a6e8d94f84c0c19e56149d0f9",
".git/objects/bc/fdab4311f2201f45b341b36310e1cdb8051e34": "0b0600863ba421ab0448fd6eb8546d41",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c2/8ffadf49b6750389c0d405ce526bf70eb488aa": "a6701a083ac8c065c186c1099ec53761",
".git/objects/c3/ac3b89d07088e76fbdea13f03dc17608bb66a9": "eb7d34fb1b04c4e2ccc640e3e492136d",
".git/objects/c7/98b922341905eebea1d4645db47c763089f594": "9b5935151d9c52901132240055d42e85",
".git/objects/c8/e7a6cf3e8403a648a0e7fa9a37ada03a5b2655": "0ce9eaee1a68562d5d46c61fcdb3b953",
".git/objects/ca/469a448bdbc50672a6147c512b2e3db28d9b0e": "9ea6dae61a38f6624b85272a663df0d4",
".git/objects/ca/fe64607e4c476395c208ea3ef4621182c28151": "38260f3b6b94330432cc412d35779ae3",
".git/objects/cc/8758d3d47b838969ee4e41fd9aa76a08291948": "d78210e05500f593dfda8072c81ad417",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/39905130b82a607ab1851b2600e56aa73d2ddc": "df8f70d0d9ec03ff97d18e5f301f26e3",
".git/objects/ce/4c86b73f13fec915f1cd699865a117ea501619": "12b59f1f4bee6df59ebd4eef5ecaec2f",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e1/d6757abecbc5425b295c29cdf1aa2decf8736a": "d44976dd5d5b84c4cbd02f1955f92ff4",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e6/8d3ea4bd39e52f88e2381b49263aef43b01d27": "b93807b978aa6b3bdca730a5bde67edf",
".git/objects/e7/307e72c5e7bced5d36c776d0986bf71b605f15": "e493f8bfd12abe75c70dc4782e5beae0",
".git/objects/e7/3577721ac598510b088928d7cdc511beeef50b": "e80e95a538b46c37b635c766d1002f3e",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/d42cf4acd1c6b894ca8c80ad2f94c4cc77230f": "a20bcff46e2ecc47d34fe211a455e5c1",
".git/objects/fc/36a4785c50c04c9b18260e4709cda077ed352d": "ab0d50fcc4cfcaba8a0f3772db0b5fed",
".git/refs/heads/main": "d767543372dfb2fcf7711b1f9c1bc0e9",
".git/refs/remotes/origin/main": "d767543372dfb2fcf7711b1f9c1bc0e9",
"assets/AssetManifest.json": "54bdd70896c5aba7a75558d44c03f741",
"assets/assets/fonts/Arima/Arima-Bold.ttf": "521022688a6a89dceec2172eed616322",
"assets/assets/fonts/Arima/Arima-ExtraLight.ttf": "b07a97dde68f50b671bbf4fe2c1b1034",
"assets/assets/fonts/Arima/Arima-Light.ttf": "8c5c5aa18f4603b76793a1341acac48f",
"assets/assets/fonts/Arima/Arima-Medium.ttf": "d8d994765eb9306446e60b1d74b40a32",
"assets/assets/fonts/Arima/Arima-Regular.ttf": "8f972f3b37539ed982de17da7b72a85b",
"assets/assets/fonts/Arima/Arima-SemiBold.ttf": "ef396c95977ec00aee9517313664cf60",
"assets/assets/fonts/Arima/Arima-Thin.ttf": "4be558b64bc8b2a2891a435edd0833da",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/icons/icon.png": "d2df481e7883000a8bc96152e7855dfc",
"assets/assets/images/certificates/ai.png": "e931f74e3ba09362d000b31f71d10e7b",
"assets/assets/images/certificates/bigdata.png": "7082229b85b1ebb3956d1df85760e7e0",
"assets/assets/images/certificates/datacom.png": "67f3c3330d77cfa8f54d43f423d71c63",
"assets/assets/images/certifications.jpg": "8940dafc09f7ad2812f0ff8a9c33801a",
"assets/assets/images/david1.jpg": "c78a7ee765745cfa5f7aeea63108d44d",
"assets/assets/images/david2.jpg": "2781fa2781d77eb112429128fed6e443",
"assets/assets/images/david3.jpg": "adaf5a68283d8bf9e33c0ec01287706f",
"assets/assets/images/home.jpg": "995c36b9ede90bb3777c83751e798ef7",
"assets/assets/images/home2.jpg": "f5f9aa67ce79b6e3ba4cf9b4abf75d7f",
"assets/assets/images/nav_background.jpg": "777c6469dc85b84343ad90a77369a3e3",
"assets/assets/images/projects/jogenicsHMS/1.png": "e658ab889f34a7f3ea4c702eb15f5a6f",
"assets/assets/images/projects/jogenicsHMS/2.png": "d38c1d42af0c88f363151464f039504b",
"assets/assets/images/projects/jogenicsHMS/3.png": "e90c4de531ddb7ba90d0b4235eca6224",
"assets/assets/images/projects/jogenicsHMS/4.png": "3fb3ea62161167789a380d1ba8716d16",
"assets/assets/images/projects/jogenicsHMS/5.png": "79e42b8de1466c66ad5f3b2f24b25b21",
"assets/assets/images/projects/jogenicsHMS/6.png": "1585d52793f7b69ba2f7bdc4e92e7046",
"assets/assets/images/projects/jogenicsHMS.png": "406e2e022c91400271af0ba081706341",
"assets/assets/images/projects/powercore/1.png": "7790834eb32d1fbbeefbd2d76603318a",
"assets/assets/images/projects/powercore/2.png": "ce449fa89c2cb4f144b2d14f37f8dd97",
"assets/assets/images/projects/powercore/3.png": "b8e9b8167f55c7673c5cb33578fe8acd",
"assets/assets/images/projects/powercore.png": "7790834eb32d1fbbeefbd2d76603318a",
"assets/assets/images/projects/pstc/1.png": "ed1bf1fc8681035771316392e4122c66",
"assets/assets/images/projects/pstc/2.png": "629ebca332441fb0f5da574e914985e6",
"assets/assets/images/projects/pstc/3.png": "b9ae3b0f21b5eabe81cfcd0d39cdffca",
"assets/assets/images/projects/pstc/4.png": "6825309af35f09294bb48921c51bcb6c",
"assets/assets/images/projects/pstc/5.png": "ca1ca7ce869760e881edaf11e70d0131",
"assets/assets/images/projects/pstc/6.png": "d44030f1ba94f36a47f91260b2b2f7a0",
"assets/assets/images/projects/pstc.png": "ed1bf1fc8681035771316392e4122c66",
"assets/assets/images/projects/sar/1.png": "99aa27f51047c589f08597d89850b443",
"assets/assets/images/projects/sar/2.png": "2dca16435418326cfbd671d85fb4ccbf",
"assets/assets/images/projects/sar/3.png": "ba8ebb7262f39bfbda9e8bfa735cdf5d",
"assets/assets/images/projects/sar/4.png": "38b72e971d32356362a4639aaffbbc57",
"assets/assets/images/projects/sar/5.png": "845fbff54d94a2aa12629752a333bc4e",
"assets/assets/images/projects/sar.png": "99aa27f51047c589f08597d89850b443",
"assets/FontManifest.json": "1173b58ed7eb654b2d20c0cb74ae3aad",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5ed09272b5717025e053fade50f76baf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "4d9e42d2cf70be410034ee1d54fcc812",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dade71b5589866229188e6b17f44b76b",
"/": "dade71b5589866229188e6b17f44b76b",
"main.dart.js": "93683912dea137aa0f050fa1f7343e68",
"manifest.json": "04f2ec6eb6647356bc89a920e503e2b2",
"version.json": "d26da854d510fb0a7f6c3cac18eed824"
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
