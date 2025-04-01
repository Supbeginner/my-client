// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCacf-a30FlgrcYd3cgiXZ3c3zIMG6ThiI",
  authDomain: "my-client-75392.firebaseapp.com",
  projectId: "my-client-75392",
  storageBucket: "my-client-75392.appspot.com",
  messagingSenderId: "324598088923",
  appId: "1:324598088923:web:6a2b7e645ab2129844563e"
});

const messaging = firebase.messaging();

// 🔕 잠금 화면 또는 브라우저 꺼진 상태에서 알림 받기
messaging.onBackgroundMessage((payload) => {
  console.log("📦 백그라운드 메시지 수신:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'  // (선택사항) 알림에 사용할 아이콘
  });
});
