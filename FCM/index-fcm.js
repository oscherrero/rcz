<!DOCTYPE html>
<html>
<head>
    <title>PWA con FCM</title>
    <script type="module">
        // Importa Firebase con la version 11.5.0
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
        import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging.js";

        const firebaseConfig = {
            apiKey: "AIzaSyAQpcTpOIfzt-xDWt0wVsY-bAqJWrhPFh4",
            authDomain: "avisosrcz.firebaseapp.com",
            projectId: "avisosrcz",
            storageBucket: "avisosrcz.firebasestorage.app",
            messagingSenderId: "392353494797",
            appId: "1:392353494797:web:9e73eacd62b4dbf5aba244",
            measurementId: "G-3GHB3VK9GT"
        };

        const app = initializeApp(firebaseConfig);
        const messaging = getMessaging(app);

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

        function requestNotificationPermission() {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                    getToken(messaging, { vapidKey: 'YOUR_VAPID_PUBLIC_KEY' }).then((currentToken) => {
                        if (currentToken) {
                            console.log('FCM registration token:', currentToken);
                            // Enviar el token al servidor (GAS)
                            // Usar fetch o XMLHttpRequest para enviar el token a tu script de GAS
                        } else {
                            console.log('No registration token available. Request permission to generate one.');
                        }
                    }).catch((err) => {
                        console.log('An error occurred while retrieving token. ', err);
                    });
                } else {
                    console.log('Unable to get permission to notify.');
                }
            });
        }

        // Llama a la funcion cuando el usuario interactue con la pagina.
        document.getElementById("myButton").addEventListener("click", requestNotificationPermission);

    </script>
</head>
<body>
    <button id="myButton">Solicitar Permisos</button>
</body>
</html>