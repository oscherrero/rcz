importScripts('https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAQpcTpOIfzt-xDWt0wVsY-bAqJWrhPFh4",
    authDomain: "avisosrcz.firebaseapp.com",
    projectId: "avisosrcz",
    storageBucket: "avisosrcz.firebasestorage.app",
    messagingSenderId: "392353494797",
    appId: "1:392353494797:web:9e73eacd62b4dbf5aba244",
    measurementId: "G-3GHB3VK9GT"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = getMessaging(app);

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});