importScripts("https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCacf-a30FlgrcYd3cgiXZ3c3zIMG6ThiI",
  authDomain: "my-client-75392.firebaseapp.com",
  projectId: "my-client-75392",
  storageBucket: "my-client-75392.appspot.com",
  messagingSenderId: "324598088923",
  appId: "1:324598088923:web:6a2b7e645ab2129844563e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("📦 백그라운드 메시지 수신:", payload);

  const notificationTitle = payload.notification?.title || "알림";
  const notificationOptions = {
    body: payload.notification?.body || "새로운 메시지가 도착했습니다.",
    icon: "icon.png",
    data: {
      url: "https://supbeginner.github.io/my-client/" // 알림 클릭 시 이동할 URL
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === targetUrl && "focus" in client) {
          return client.focus();
        }
      }
      return clients.openWindow(targetUrl);
    })
  );
});
