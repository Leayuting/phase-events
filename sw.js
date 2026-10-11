/* PHASE 活動系統：只為了讓瀏覽器可以「加入主畫面」，不攔截任何請求、不做快取（資料都要即時讀寫資料庫） */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
