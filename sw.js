// sw.js
// 监听 `install` 事件，回调中缓存所需文件
self.addEventListener('install', e => {
    console.log("1");
    /* e.waitUntil(
        caches.open('my-cache').then(function (cache) {
            return cache.addAll(['./index.html', './index.js'])
        })
    ) */
})
// 拦截所有请求事件
// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据
self.addEventListener('fetch', e => {
    console.log('fetch source' + e.request);
    e.respondWith(fetch(e.request));
})