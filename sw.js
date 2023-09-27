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
//监听浏览器的所有fetch请求，对已经缓存的资源使用本地缓存回复
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                console.log('Fetching resource: ' + event.request);
                //该fetch请求已经缓存
                if (response) {
                    return response;
                }
                return fetch(event.request);
                }
            )
    );
});