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
