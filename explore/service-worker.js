self.addEventListener("install", function (event) {
    event.waitUntil(preLoad());
  });
  
  self.addEventListener("fetch", function (event) {
    console.log("Fetch event intercepted");
    event.respondWith(
      checkResponse(event.request).catch(function () {
        console.log("Fetch from cache successful!");
        return returnFromCache(event.request);
      })
    );
  });
  
  self.addEventListener("sync", (event) => {
    if (event.tag === "syncMessage") {
      console.log("Sync successful!");
    }
  });
  
  self.addEventListener("push", function (event) {
    if (event && event.data) {
      try {
        var data = event.data.json();
        if (data && data.method === "pushMessage") {
          console.log("Push notification sent");
          // Check if notification permission has been granted
          if (Notification.permission === 'granted') {
            self.registration.showNotification("Learn2Drive", {
              body: data.message,
            });
          } else {
            console.warn("Notification permission denied");
          }
        }
      } catch (error) {
        console.error("Error parsing push data:", error);
      }
    }
  });
  
  var preLoad = function () {
    return caches.open("offline").then(function (cache) {
      return Promise.all([
        '/',
        '/index.html',
        '/index.css',
        '/index.js',
        '/images/one_512.png',
        '/images/two_192.png'
      ].map(function(url) {
        return fetch(url).then(function(response) {
          if (!response.ok) {
            throw new Error('Failed to fetch ' + url);
          }
          return cache.put(url, response);
        }).catch(function(error) {
          console.error('Caching failed for ' + url + ': ' + error);
        });
      }));
    });
  };
  
  var checkResponse = function (request) {
    return new Promise(function (fulfill, reject) {
      fetch(request)
        .then(function (response) {
          if (response.status !== 404) {
            fulfill(response);
          } else {
            reject(new Error("Response not found"));
          }
        })
        .catch(function (error) {
          reject(error);
        });
    });
  };
  
  var returnFromCache = function (request) {
    return caches.open("offline").then(function (cache) {
      return cache.match(request).then(function (matching) {
        if (!matching || matching.status == 404) {
          return cache.match("offline.html");
        } else {
          return matching;
        }
      });
    });
  };
  