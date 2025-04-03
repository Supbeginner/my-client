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

const notificationTitle = payload.notification?.title || "📬 새 알림";
const notificationOptions = {
  body: payload.notification?.body || "메시지가 도착했습니다.",
  badge: "/badge.png" // 안드로이드 배지용 (선택)
};

self.registration.showNotification(notificationTitle, notificationOptions);
});
