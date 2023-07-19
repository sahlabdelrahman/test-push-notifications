import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDNgGwlX6iQghS2OwjVBPlU4igIQ3fXJJ0",
  authDomain: "push-notifications-test-18db7.firebaseapp.com",
  projectId: "push-notifications-test-18db7",
  storageBucket: "push-notifications-test-18db7.appspot.com",
  messagingSenderId: "985364411726",
  appId: "1:985364411726:web:3b4a88bd52c96848ed5a1f",
  measurementId: "G-EQ7EQXCFDB",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BApFD3Py_xvSg9ayoe60NI3pnRmEhPpxS4R0F-1jOBgeKqOQFq6f4A-YudAsgosyVhXjpDx7l2ugb-VEnQyQLTY",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
