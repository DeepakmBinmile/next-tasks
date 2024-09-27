// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyD2ZUe1tQRwvq0VxwWaAf8Pp97MQ3FncQg',
  authDomain: 'react-notification-350e1.firebaseapp.com',
  projectId: 'react-notification-350e1',
  storageBucket: 'react-notification-350e1.appspot.com',
  messagingSenderId: '377279904251',
  appId: '1:377279904251:web:a2ce00c2eb50c3470cf35e',
  measurementId: 'G-H9ZSK5Z4B4',
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});