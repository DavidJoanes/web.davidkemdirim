'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5afd6f0e7c99b69ac547584840572b59",
".git/config": "88d976b152861dd3a17a23f780f3a27b",
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
".git/index": "8c3e4cb23329a941f3f856d6819e05e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "390a9c6bcd25d83cdabf749a4361fef8",
".git/logs/refs/heads/main": "d01b31bc1bac749663d450cdb898eae8",
".git/logs/refs/remotes/origin/main": "15116fc1292c88c1eb2761699f04e30d",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/12e7da626ca2f959eca850c806779ba55dbfbd": "c094fa0b00e6ea2120d2a30cd1da087e",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/04/9f21504454feeb218f381582f7a220f7fe69c8": "2dbc33adabe49273c51234337a501a4e",
".git/objects/05/bf90a43bb62710beadda8a80903ec334b9b245": "f02fed61bd59576b3526a3d2403498cd",
".git/objects/05/d1e9bd8d3de87f9dc2c0980a1789a3db333d8b": "3160e645ffcfbfd087b9c115c4bc2b0e",
".git/objects/06/25fc71290c7b2317e0afa6ec5818e81020a984": "35f870c5c18258bbc97047cc88a73362",
".git/objects/07/52a0d91cd5d915c14584c131d280b621c9cc7c": "5ca9dc55c8f4942c6edb38839b39d728",
".git/objects/08/4f9c0f5365952d4d860431a1c2dca147e4a9b5": "dab2b7ce77b85dd7850aef2e03638cf6",
".git/objects/0b/3609abcd5038e5839b0fbd02b5f4f1568fa7da": "7f0b4660739d06d31de8a43f6b86c7a9",
".git/objects/0c/101ba9905f9084c06e906fb8242637bf7fa8e0": "4fd36ce417ea719429ff78ce4fd35d5b",
".git/objects/0e/28f35977f6b779b687953fa82a162c1e95a622": "cc57d4f34e05dba4e902db82c2e6c450",
".git/objects/0f/92e3d9ff3adfc826d9c33a30e40b1f1424310f": "4726b96fc89ea7f4b026b8c4f3d69e67",
".git/objects/11/469f6f23cb92d50fcc7c457d6dc5d5f7815051": "6eaf2abc174cd2eba4930d9ebeb1abf1",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/364e7d014ee55d6074070103a7025cef7ff486": "a0cd2dad5bea49393dda21d7ebe3839a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/12/e6038e58fbaea6aeec5a3a95cc0b1aa34a008b": "a253cafd729e84b50468f3bd7163a414",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/15/47128d29c0d26bba0e1ad83afccba2e24667e0": "739e3786de8428e234aa1c55eeadbe50",
".git/objects/16/65e8661e4156ffbc77c6063f0bb1ce68abb12d": "ba67b127ab365f1e6fa0ae53fba9b0ab",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/bd45b457e7e332a7913529bb448b8cb9a0d20a": "0aaf328f36cbd6fbfbaf09b41507c3c2",
".git/objects/1b/43d2e6fbf69c2c7ba305782c77d8db20d832a4": "1f1b4da87167cfc76703895e3fd30c20",
".git/objects/1b/5eaa361c7306b4246c48497c79475c0e05c5e2": "797c30b38f4b43082bf674ed21553c74",
".git/objects/1b/7d45f2a4f533ec6fb8b79a4a0d2e5afe9d764f": "12d0f79a09882ebe155fa29f3ebf1c3e",
".git/objects/1d/025ab341388a6658d4a68ccaf816535e7e7c91": "c9273c96fa7562639355c367136cc27a",
".git/objects/1e/1994247cafc8270ae5cdc37ee1ee9c7ec50d5d": "2f52781da5449601fed1b99de107976d",
".git/objects/1e/40bd4141fd3f7ba042072a9326dbfd862fc2b5": "6945007c1dfebc09524c7fe3e5098bfb",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/21/577116cfdb49140c417710e97a8b4a10aed4b6": "75d4ff9c6be962eccf440bd1a37f291e",
".git/objects/21/788f41096e9cbb3162b7206f24dc3921dbaf63": "6d8a6b2e8f5c59439270d7dc3c959a76",
".git/objects/21/e25c508fdebdf7ce17c89bab17aa8246e5e514": "41c86e9238e0db05716e3050d9dc5f55",
".git/objects/23/0b4b974994fa14a614dab8bd97fa3e62aa87c7": "9299ceeb88835faa622d515902c56269",
".git/objects/23/69a5f0de282a3f505ac52a40e8a2edc899310c": "9d20ac4ded7b7b47e7380056af878e4d",
".git/objects/23/ee4a1668664cc8e14ae4153954a53ff95c645c": "5c1ddef266765f742afbb9acff53bdcb",
".git/objects/25/4bf8b376598ba9bffcffc83a7441b40c7c770c": "f8e3c26d9f2b829dabc7192f826b3f26",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/28/298999cdbd1855e34a76dca812c2dba63bf2c6": "a35d4cc855fa14bc3057c3a642d65376",
".git/objects/28/3ec645f055d1a01fcc9e716b82c165b5c0046b": "1097630b68e0c74d37d6cde61053712f",
".git/objects/2a/60c530613eaccc795b3006a412159a0d75c26e": "01d923bd5f50532271b54c7339f39010",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/206a6f926e84c36a488ca84f3973748be935df": "86bcc64d4c9c7b9c1a56bfe9d4236cc0",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/277afb231f7613a49d983217c1aba871741433": "9047448a3d09251b8161710e65810e36",
".git/objects/2d/8df0eb3f41c017ab4725cc32bf84854594a6b9": "472a19c436938a3b4a0f750b1a9982e3",
".git/objects/2d/c2e117afdf9b8e3da9ec141545611b2bfb6250": "a6b92a45c58f0b24d3a82cb8c725868c",
".git/objects/2d/d2db7fdc1bde6b37842857bd0100f66804f7c9": "3b34f8c809a8c6407f1317d4faa8714c",
".git/objects/2d/f316e0c839cdb9823773800f7a5d3e615ed3d3": "3e78f75ea6c4d00931da55c3ed731d47",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/2e/14b3d2f469039551e34b584a21b6c7cd228a4a": "bd3f81f46d4efe316ce180eeb1c0d88c",
".git/objects/2f/86c3633a9bdddce10a389c1c4fddeb769208c4": "beabccb867e7cf0a670dda66956376da",
".git/objects/31/2d5a9115f84dd99960d72f6e87cf3cbda2d8fb": "76f982223901e5cddb39426edf19fca0",
".git/objects/32/25df25c94f3bde23f3028a37a1d29663ae0da4": "694a010966ea53142ff9dcab7b6c337d",
".git/objects/35/13119a882dd125ad23845c8ee9d2463078a713": "f34c4f6d4da6b73561a0db98ef202cd9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/adcd32f8a4dfef51ff91cd01de03d42e693d65": "0625c73ceb8e573c572c202e032d9832",
".git/objects/39/fcd1f66d86538cfc221354ec86101a31401b71": "395bd24cc7c8e2bcac2860d98fbe5d21",
".git/objects/3a/2741df97884cf183dc6f15a6174a235fd4cb76": "1f1730103560caba98b0ca94001464ba",
".git/objects/3b/6dc7cf734d93d1d9303dd53c6c51c26f56ec68": "b370a3405382477df9a5431d5715c9bf",
".git/objects/3b/d015ac6a02dbfea1646e5479b6b9f00ef9243a": "562bc670dfc0f830c2ef195a7f405436",
".git/objects/3c/4024f70d375acce0be82694ea26431199fe2f1": "afb463814d97e36bc70c1ea1c8b4784b",
".git/objects/3c/500963765b138186bc8e4f74c107dcb612071f": "998e20958fe6473c804ea0d63b272bd2",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/e5c90703d6f3ea3cf55f84fa5ed5fbe96ec44a": "4045eadb056221cc520917ec93c9ef5f",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/8d97558acc9aa262379f9726f7ca49f01d8f6a": "08a339d5c6ab01f228ebd100578bd8e0",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/48/68a4f8f54ad1faa0cd3d7e8bb2627e8aa6c993": "4bcf937109b42607151d06611a858ae8",
".git/objects/4b/0ba2b822b6905bb4c2b9ba4fce3b66f80d5426": "97bfd2abcc5e2f515ec925757c5c5858",
".git/objects/4b/a67236ba88e2177acd8105757dd3a9070c1de5": "d5a613cb0754fc4015e5745e601eccbc",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/c86134b5a0c1d5167869a44c4626a16649d1d9": "59ca8fbb325c0f3f2fa0bd1c42f7325d",
".git/objects/52/e7209745d38c0065a5e243688264bbeb9c65bf": "aea58e7bd5985b7b236dce967aa2dbc2",
".git/objects/53/a9e2e15e8862c03c2258ffc39c5f1399c89817": "2275248e316d837c0fe95ac937e43fe6",
".git/objects/54/44ab998e8ed0d106bfc0cf02a53f15e340c79e": "684d892fb79acf638ed8ae1dd70930d9",
".git/objects/54/d4efe84a20a417d99d96bd0ae836e783552160": "e1da01ad227217c74f8404e8c5fde816",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/9882a9e53cbbdb0b8e312b4253201dcd255174": "d47dcb6b4d0f39c0c2d52dcf80b38d57",
".git/objects/5c/08677f9ba8689f6493882cfe5fc07125d2f54b": "fcc7d325033572a7c17cfa3fa3956562",
".git/objects/5e/7cac7b60cbb61e6091b1e491e2e153c63ff3c2": "c179dfa8dae39adea1095776e8e5f467",
".git/objects/5f/f9d0ba68e2024f4b821ca3db02c0db91c2b62b": "62004f1a909663376f21fb0d7c5a4e25",
".git/objects/60/1dcf395458572a4bac24394731ea1f35098a88": "595136281eb30af1735e690ec3944513",
".git/objects/63/db235c4066009da57737fb00632126c335b20a": "07a6c9770e5965509704dc096044af60",
".git/objects/66/a41bc0bb9987215eba7d6bf98cacf8ba7d39f3": "4f2a7803e787b55dd91d1cd52e87ba08",
".git/objects/69/c9deaa07c0b84109e7b53a4f95d0a67859c3c3": "395b903286c644aea5127de45d65c96c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/296adb6b499cc07091057d48a052bd04dbc72b": "78ecb97ecbdc3898bdff30861845a308",
".git/objects/6b/a4eccba8dc1f2380a4b27f9b9573913c77fd85": "fddab3661132acbdb1c74bd631a0fb0e",
".git/objects/6b/a940b2a1e046a3e66e6689870c2f390769f27c": "59186d5789d18d772d532c5a40060510",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/22c36d58d515b177206fbf6438aa0a49c29f66": "03ca252eded5dbf4c1399a82c88d29f4",
".git/objects/6c/b91d6373e1c47b2da8cc731959b8286773f90d": "a358a721c257997395313adae4bae5cb",
".git/objects/6c/bf47748afe68b0ba56820e9478f8eaa0c7bb12": "91569a96565fc4d87a8c2890079830e0",
".git/objects/6e/bc4bbb87198f82bac71b2ca18a6edcd48ca60b": "0ce354edc2bc6bb4e6f41c5a119ce62b",
".git/objects/6e/d12ca1ac22b14bbef8d5ef7d2a6a8d9b2efd4c": "86cc8a690ed2f3544e08370765b85d13",
".git/objects/6e/e2c6a9e401cb88bf62f6c966840c3597b1291c": "ad7c34dbd2efa3e08ceec23ed6c602b6",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/72/e30c06f09bc653bb443d2070ad01874308acb4": "b5e100098a318c22ada95e58a384bdbf",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/db42ceb677b64805c138b72b507d081d903a47": "67bb1b29c627b4cf7847628e6237c23c",
".git/objects/77/735af083d24bb71da38214d5ed1630b1bd3afc": "72aae770c30dee14bfe899441ba5abf0",
".git/objects/78/5c83b6bc54c3fba246cb3fd72c6b34a8323077": "539f909c0e1ce7a2e3f54ad061c47d62",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/1068e6e7030332e4ebdd3a946da6b0c076bf08": "0ea267adbe8710e9505f608ed9fdf7bc",
".git/objects/80/7ffad921527acba44b0e8c3ce4b173dd4dfd7e": "d45b4544c8af2802d9f506bec17288ff",
".git/objects/81/7078181581344e50bcd2f8a772facd42d28a08": "2212d64b954f0176acb596bca4b9a035",
".git/objects/81/8084c854f4c9536439be7bfdf8681f89183cc1": "c8dc45732dc419800984bc5d232e9cdd",
".git/objects/82/ecdc39fd0a82c3446a74b4ed002c4dac5f2f9f": "707bf8f5485ba16833f736537ee9efdd",
".git/objects/83/8c86235afbcff797a4825913bc836f7a231cab": "d77c87f55e453c8945a7322e6a9d497d",
".git/objects/83/a2df7cfe17e6006fdaad56a809c730338c65b6": "dcd6e1aea95ae133f874481f0cec3a90",
".git/objects/83/b7de83fc36fd02cec1b2b187945cbf6e32e791": "daf39d8e6a5d522f8193fa06b1ad2bac",
".git/objects/85/2126bd5343079eccd714455c245f07dba1fff7": "d434e0f52fb8b68254e4ffbe2607a6e0",
".git/objects/87/08fa5dbd8aa19d06a3b2628f520353b93bb078": "f724f9da4d70f836e7e5a190397f5c84",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8a/5d62817f13b4b95d0d546b723327c247b12aee": "c573a449d3c5bc4fac0a29d0ea72deb7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/2ae7c6d75ac7ba3299b76029779622acd35059": "4a5dbff256ca4b156c3dc3981023a047",
".git/objects/8d/55a9af6f4bb61f0ea2ee99ef93cdfad798ea1b": "afdc114f2761487972f408364d95f357",
".git/objects/8d/eb5253eeaa1abf60c6f8db166b864c95ba29ea": "a08a58b7d8852d2f9d9ff407491777ec",
".git/objects/8e/033d80c344ca833a1c1276d81a02bf8bfc1c21": "a1d32878946d3dff76c2b91703b64991",
".git/objects/8e/44570ea5968aaa1af4ac7ffc2e0d83bd80c6cb": "dd9970b2c208863dd2e20ac3d79fc233",
".git/objects/8e/c8edaddfd8d79739a4d5afe1891788653d68c7": "697b672f6d1e79076554ce6e9410c4aa",
".git/objects/8e/f6caedd85d97123276c30a72fcd61e1a18c6dd": "a3fedd8a15bd5e7f8b1fb344a2cfdceb",
".git/objects/8f/3bd0f8639f8a1c77c7101acfad7e55a4c0b1e6": "104af8077faf4f7de178acb71df72b60",
".git/objects/8f/dab4af49d7295027e261942b2e6ec5ea9ee424": "61b02ee810db74e28d8ad89fd250e185",
".git/objects/91/5191128d7124ac3e875149acf7ef7d22c5f0c7": "6c354df29ed625d67b10cfe89d9201b0",
".git/objects/91/df78f6423b62173f7c003bee535e69308333ef": "ca92f8c21f83e61ed9d3618b22d7ed91",
".git/objects/92/374901b2a6e5e3c16bf9a37e3e1a92f3cd9e80": "16babf6ae050fb2fbd0024f4af9abab6",
".git/objects/92/55152d1c98b951ce60e6c83acd418ce3f4cd61": "1f4d832d2303db3f440d291b55ecdb24",
".git/objects/92/83ad6973e919ac211a0d721100eb86c3eccae6": "e45d04acab64820ec3bb47c25079f6ba",
".git/objects/93/30b4abad3896d7bfa8e7795dd2564d7c0cc4cc": "8b758bd944cff85c0089465ee5a7d4f6",
".git/objects/93/df3059bd52d2683d8761088630472a4c980f46": "f79afb152fdc903d0ac575617597a44c",
".git/objects/94/bbed75cf3bebadc5b855be3162ccdf40e7f4d7": "eac9341a37f0ba7422783a43923a68ab",
".git/objects/95/a6c9616910b510597b8d8ec6615bfa68218fce": "09b74bed7ef0ed8674fe896f55d9a5b8",
".git/objects/97/014f3403a959c46cd4faa94b853f0c44a783ce": "a4c692002854eac9d030dd9d59df2986",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/3e38654adf7de9bfcfe92cf19fcb066ae92250": "baff56106774169edf7412c43f7527f4",
".git/objects/9e/46833bddca2aabf08a08ae2b98cc7771d0bfd1": "a9b938831ae29df2a337d1ca37f8bbed",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/5c14236cd4dec0d2bc763a34a269e66b617c01": "d26c77014f8507892327e1537a947b19",
".git/objects/9f/7419bbd7dbc1dc67f71f83478cd52545da71a4": "ab007da044686cd68bff823289231fae",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/a7eadc0db25869155b8f9966cee4db19315d69": "66e8df26ff0235e0f07228f108064886",
".git/objects/a4/89da769e3f7cd4f263cbf1b3cbeaf1bedd5c86": "7d73346ee6a16d4047101e72daaadbe0",
".git/objects/a5/24c2446eed08bd092e161f9b8826f9c27f09df": "e80e1356b67fff4473e270aebc1546e7",
".git/objects/a6/f66282087a38b4dc5c1f22e1b8508ba772b70f": "5d5700da62bbcb1840e0857731f6fdf5",
".git/objects/a7/9b178090a53242535c15693ff44ed2f80f3e54": "ca6a16d5ce871d409a055f5ff1edad77",
".git/objects/a9/72228644864a2f91826f72f373bf8b53ea8d3a": "917f819ec57c9e6c125dd8b6b4fecaca",
".git/objects/a9/744a9a615d4569648187c1e1ca1700018c8d60": "872edd59bc522f741bde6862577f4a06",
".git/objects/a9/a66d1c7239f4f9ea3735c63a4fa9b3a5b2ae71": "2f4e06c4a4e1f5fe177dd62a905117d2",
".git/objects/a9/e8513c64f0409775ab3b1f5af17f4665ce8c10": "e025abccebaa39d31f46c5ee988d1b7c",
".git/objects/a9/f6985c28a02eb4deaa80aab2d3dc7a313fe8d8": "daea90fb807f9d1da566353f0037c954",
".git/objects/aa/09ca89faa3cbbe01f1e7de6695dad860ffc671": "04c5ffdbfd955300f26535b9adf073d9",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/07f827651b43b9e8de2e28ff4d91fbf98f3eb6": "c5f9d0189f347ab431829fdced029384",
".git/objects/ad/ba15be09afb77004bd306be1342c2aa2549398": "f6aa9efb6f427e7a5b67b073ad4fc483",
".git/objects/ae/eb097da176d9feddd3ccf8e9b98174886de4b6": "40574b1bb6d38cfceec409ee061c6d36",
".git/objects/af/354009de80f822716d2baf93a62f66fcc1ba11": "923511ff6e72c06879e920c60b54ff74",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/af/7d907089280027309c0b88609b8a67c46e7c61": "c1e32deec79541e8e54c2ec34e849d11",
".git/objects/b0/187e34c0617c58bce315d60a8ef6f81b8b7a6f": "fdcd72ca57afdfbb70c6a653bb8ce5d6",
".git/objects/b1/f59799ac7a6f06441a46eec5021da783b11fac": "95ed46cfe0361f3dc1c0a82fcd473f78",
".git/objects/b2/c6aca57bc0d92ab3197d595766bf9285deea00": "a9be37e0f080009d8095a09eb2a7a1c8",
".git/objects/b2/e7159efe48ae446bf7cefb7d2d2dfb599e03d1": "98b72b5acee984029eb4cfe8722c9214",
".git/objects/b3/816e18f2ba2d601c40c5bfba93f182ec7c50b1": "a0b941ba4c9913b8f4ee303dcf19f4cc",
".git/objects/b4/e19c2b20b1e8cac685d65bf10690d3348b0e73": "ce109d7c236d26517c6b2a1928649c53",
".git/objects/b5/50928da4eeeb68c302089e0de4d25cb3b4b5a6": "09397b0ffe4d6134ee6f59fa1224a9c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5713f7f91f34def7d086cf439b0844b29dc5a9": "5b55cf86d18493eac7891d0e2e2c9196",
".git/objects/b9/16ee55f56b2bbedc369d7438877c2ff44fb100": "d5f38834ddebeae9a8960e2565c01079",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/d73bbf3416d770fb8a80ead8c676584153ccfb": "f767ac7a6e8d94f84c0c19e56149d0f9",
".git/objects/bc/fdab4311f2201f45b341b36310e1cdb8051e34": "0b0600863ba421ab0448fd6eb8546d41",
".git/objects/bd/1c37d6da70be0b996c65266d075620a7f0518e": "e3cfccd50eb59d796d2a7cc2f18631ae",
".git/objects/be/097544b6a3af6896670e56d8918d17b1e02801": "96c3542d7caf2781da6025f7057879cf",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/bf/67a3598ad5d3f97f1dff19306a0a21e49e567b": "32c6ba6e59f3dd6f35dabe635c9a57fd",
".git/objects/c0/9911f51265d83837aaeeaba896e0e881ae0827": "8ce7a5618e546b8a0944b5950c0affe5",
".git/objects/c2/8ffadf49b6750389c0d405ce526bf70eb488aa": "a6701a083ac8c065c186c1099ec53761",
".git/objects/c3/ac3b89d07088e76fbdea13f03dc17608bb66a9": "eb7d34fb1b04c4e2ccc640e3e492136d",
".git/objects/c6/3dd9461a92b2cf86b5b1785dfeacc865f090e2": "0b914df858ddc1ae7ffa9769fef41eb6",
".git/objects/c7/98b922341905eebea1d4645db47c763089f594": "9b5935151d9c52901132240055d42e85",
".git/objects/c7/d4200597f5ef455f92154e0406b5a8ab7a1cd7": "da9dc46f3e92e3b55e8557e606e5a046",
".git/objects/c8/b8046551f0aa9e96d4538110754028fe232cfe": "54855459694e84e37be6047d82e1d5e4",
".git/objects/c8/e7a6cf3e8403a648a0e7fa9a37ada03a5b2655": "0ce9eaee1a68562d5d46c61fcdb3b953",
".git/objects/ca/469a448bdbc50672a6147c512b2e3db28d9b0e": "9ea6dae61a38f6624b85272a663df0d4",
".git/objects/cb/ec3fe426906f892c099bc96310946a57a8529a": "14962f218cbe3d8d2a5cd6849b250d30",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/8758d3d47b838969ee4e41fd9aa76a08291948": "d78210e05500f593dfda8072c81ad417",
".git/objects/cc/ef949ee36f27f231117837df52eda6b5eba18b": "f752fba5f1061d2d61e7e6f1f34c1aaf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/39905130b82a607ab1851b2600e56aa73d2ddc": "df8f70d0d9ec03ff97d18e5f301f26e3",
".git/objects/ce/4c86b73f13fec915f1cd699865a117ea501619": "12b59f1f4bee6df59ebd4eef5ecaec2f",
".git/objects/cf/ce5e3b41d5963edaae59e3c0019541fa9b1a92": "43022a6285120af5a31725dc21d05556",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/192ff2771053d14eb2f1cc7ec45bf2c7e5464e": "4eb9092a9764778233548cec61d07d3b",
".git/objects/d0/9fb12e4f26fae06836e90d7df9c2c0c9c2010c": "5436df865b40d2861db3304024f593c3",
".git/objects/d4/6748d6c1590c1e86cd0df025c25f99d476609c": "cb78f24279c0710235ea23166dc65a40",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b9a81bc9ea7986c208626c8a9f81b7d6eb095": "3e30e3bd7f8bad6822b1666a949e2a97",
".git/objects/dc/851c890ff038cce6bdb02c346108ee916d7fff": "792b15b2b8cdff1533424c33673faff0",
".git/objects/dd/3f13dd506fea0a47fb8ebfeed4071204e6ed67": "d97b4a16c460ee0a976fa5994384fd67",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/5e94d51c979476f513576f07f710db7f0021ba": "04613f6b25315ee48e458aba4a95de0e",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/f0ae9f7236bedbc51d27c43ed4c7f512f5c6b1": "1192a65dbbb86ed31f928e15bd8039ed",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e5/4118aca2b422390fff0f802265835309c6d429": "c6a1f11f7bab16563f20587c62b562b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e6/8d3ea4bd39e52f88e2381b49263aef43b01d27": "b93807b978aa6b3bdca730a5bde67edf",
".git/objects/e7/10d44e607612312f3432bdc5125faf34fd8b5d": "222efefb03da8ff82539119ac32a0790",
".git/objects/e7/307e72c5e7bced5d36c776d0986bf71b605f15": "e493f8bfd12abe75c70dc4782e5beae0",
".git/objects/e7/3577721ac598510b088928d7cdc511beeef50b": "e80e95a538b46c37b635c766d1002f3e",
".git/objects/e7/6d6091814a096cb87b438abd4bd7cb84619a90": "9d4f1f34b670db229312886e32c1e276",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e8/4a1f6c7d1b85a513f1e1b6b6fe06c7505dbbd8": "9f888f923cdb95142b3df6e565fe268b",
".git/objects/e9/13e54bc05cbc0947c9a7eb52c4fdae04e2cd73": "4a0166fc3e48894b7734296884296428",
".git/objects/ea/01c5bf36047003a1052f1d049a0712933b6e44": "7445c38415f8a5ac743f75cda047d02a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cb5e32dc047ac5b025a4f0be50fe388d9b133e": "f87b4df7f399dad7e18f6e169346be02",
".git/objects/f5/905d88abe66cae38f0f97669a0d31991c7dcdd": "4fd7bdbf8be3cce524c981c3ea426a60",
".git/objects/f5/a8f29e397df78574440fedd5910728ca0b919d": "ea5f850b08b8fabfb4afc828e03df4c6",
".git/objects/f5/bc3c3a36aa7e3055b5be215270344be75681f2": "b2894afabbf9c7a3cf5ab2fca70b6150",
".git/objects/f8/107a772803c940819b5a5012ab8c4292447713": "0b2a087df160e2fa4bb7a64e78b6fb67",
".git/objects/f9/5de35b60b2b442acb374ea747eb93ca504f8b2": "96203c502c8758571a3bd6177491adae",
".git/objects/fa/d42cf4acd1c6b894ca8c80ad2f94c4cc77230f": "a20bcff46e2ecc47d34fe211a455e5c1",
".git/objects/fc/36a4785c50c04c9b18260e4709cda077ed352d": "ab0d50fcc4cfcaba8a0f3772db0b5fed",
".git/objects/fc/b68de699f9d1c4cb9d801c69a41048d6e3fae6": "b8fc6b7d8483e435bca640e9d735b6df",
".git/objects/fc/c0d840ea68426123154b00333820c0e38f367e": "a12b789e5fc34d3e797b0084c979f8dd",
".git/objects/fd/32f8084da4d04c38908aaba222b4ba4b287a13": "ceb44a3145577514ceb626e7a5e6fc43",
".git/objects/ff/b583350ec6e5bec8e6ed35885ac0d7732a7cca": "40f7d2b10dba40124bfcd0ddfdc2293c",
".git/objects/ff/e39aa8495341069791f419c6fa6fc7bde07f55": "fc7d4d390ed528145f86f5e6e67823af",
".git/refs/heads/main": "7450698a37568f383173f685f0310293",
".git/refs/remotes/origin/main": "7450698a37568f383173f685f0310293",
"assets/AssetManifest.json": "7f7cc59ccb3f4981ba26a9506a76f32f",
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
"assets/assets/images/certificates/storage.png": "93eaccb26c7d2f4010b6d726b3b1cbb2",
"assets/assets/images/certifications.jpg": "8940dafc09f7ad2812f0ff8a9c33801a",
"assets/assets/images/david1.jpg": "c78a7ee765745cfa5f7aeea63108d44d",
"assets/assets/images/david2.jpg": "2781fa2781d77eb112429128fed6e443",
"assets/assets/images/david3.jpg": "adaf5a68283d8bf9e33c0ec01287706f",
"assets/assets/images/home.jpg": "995c36b9ede90bb3777c83751e798ef7",
"assets/assets/images/home2.jpg": "f5f9aa67ce79b6e3ba4cf9b4abf75d7f",
"assets/assets/images/nav_background.jpg": "777c6469dc85b84343ad90a77369a3e3",
"assets/assets/images/projects/bolebyjoe/1.jpg": "ce226b11b3f602a3f41ecf6f7a9e74cf",
"assets/assets/images/projects/bolebyjoe/2.jpg": "109127da310ca68dc190fb49f46e53fb",
"assets/assets/images/projects/bolebyjoe/3.jpg": "028f7a789224d78ab86a050cfdb254b3",
"assets/assets/images/projects/bolebyjoe/4.jpg": "b80f72d0aa331011f5f7e58d891cd792",
"assets/assets/images/projects/bolebyjoe/5.jpg": "c8ae8ff1a76e6ec458ff16faca9408dd",
"assets/assets/images/projects/bolebyjoe/6.jpg": "380105106127a18caf6fcaf3c52b908e",
"assets/assets/images/projects/bolebyjoe.png": "ce226b11b3f602a3f41ecf6f7a9e74cf",
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
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c76434ec7ed998cee16f431777df8c1c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "4a9cde88d06b8c31f99cfdfab29d0c63",
"favicon.png": "3957641ef2344393a2d488896f99bc3f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "8fb898ece4ed443f4cf8a323343b3992",
"icons/Icon-512.png": "1b44ae5bb5fbb8c2c1cdeffa34a47242",
"icons/Icon-maskable-192.png": "8fb898ece4ed443f4cf8a323343b3992",
"icons/Icon-maskable-512.png": "1b44ae5bb5fbb8c2c1cdeffa34a47242",
"index.html": "27958c2b71db2fa1dea1170418560959",
"/": "27958c2b71db2fa1dea1170418560959",
"main.dart.js": "c9409515445b639fbf839b503f2c0bb1",
"manifest.json": "0fce69b0493a96e6d3a8633126abfc3c",
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
