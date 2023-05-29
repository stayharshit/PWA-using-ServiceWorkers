let cacheData = "appV1";
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response && !navigator.onLine) {
                return response;
            } else {
                return fetch(event.request)
                    .then(function (res) {
                        return caches.open(cacheData).then(function (cache) {
                            cache.put(event.request.url, res.clone());
                            return res;
                        });
                    })
            }
        })
    );
});