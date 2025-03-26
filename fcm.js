      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
      
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
      apiKey: "AIzaSyAQpcTpOIfzt-xDWt0wVsY-bAqJWrhPFh4",
      authDomain: "avisosrcz.firebaseapp.com",
      projectId: "avisosrcz",
      storageBucket: "avisosrcz.firebasestorage.app",
      messagingSenderId: "392353494797",
      appId: "1:392353494797:web:9e73eacd62b4dbf5aba244",
      measurementId: "G-3GHB3VK9GT"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

    // Scripts para Firebase Cloud Messaging
    importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
    importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

    // Inicializa Firebase
    firebase.initializeApp({
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    });

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        // Personaliza la visualización de la notificación aquí
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: '/firebase-logo.png',
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    });

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registrado con éxito:', registration);
            })
            .catch(function(error) {
                console.log('Error al registrar el Service Worker:', error);
            });
        });
    }

 //const messaging = firebase.messaging();

    messaging.requestPermission()
    .then(function() {
        console.log('Permiso de notificación concedido.');
        return messaging.getToken()
    })
    .then(function(token) {
        console.log('Token de registro:', token);
        // Enviar el token a tu servidor (GAS)
    })
    .catch(function(error) {
        console.error('Error al obtener el token de registro:', error);
    });

function sendPushNotification(registrationToken, title, body) {
  var FIREBASE_API_KEY = 'TU_CLAVE_DE_SERVIDOR_FIREBASE'; // Reemplaza con tu clave de servidor de Firebase
  var FIREBASE_ENDPOINT = 'https://fcm.googleapis.com/fcm/send';

  var payload = {
    'to': registrationToken,
    'notification': {
      'title': title,
      'body': body,
      'sound': 'default',
      'icon': 'https://your-app-icon.png' // Opcional: URL del icono de la notificación
    }
  };

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'headers': {
      'Authorization': 'key=' + FIREBASE_API_KEY
    },
    'payload': JSON.stringify(payload)
  };

  try {
    var response = UrlFetchApp.fetch(FIREBASE_ENDPOINT, options);
    Logger.log(response.getContentText());
    return true; // Indica que la notificación se envió con éxito
  } catch (error) {
    Logger.log(error);
    return false; // Indica que hubo un error al enviar la notificación
  }
}

// Ejemplo de uso:
function testSendNotification() {
  var registrationToken = 'TU_TOKEN_DE_REGISTRO_FCM'; // Reemplaza con el token de registro del dispositivo
  var title = 'Título de la notificación';
  var body = 'Cuerpo de la notificación';

  var success = sendPushNotification(registrationToken, title, body);
  if (success) {
    Logger.log('Notificación enviada con éxito.');
  } else {
    Logger.log('Error al enviar la notificación.');
  }
}
