importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCacf-a30FlgrcYd3cgiXZ3c3zIMG6ThiI",
  authDomain: "my-client-75392.firebaseapp.com",
  projectId: "my-client-75392",
  storageBucket: "my-client-75392.appspot.com",
  messagingSenderId: "324598088923",
  appId: "1:324598088923:web:6a2b7e645ab2129844563e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📦 백그라운드 메시지 수신:", payload);

  if (payload?.notification?.title && payload?.notification?.body) {
    self.registration.showNotification(payload.notification.title, {
      body: payload.notification.body,
    });
  }
});
