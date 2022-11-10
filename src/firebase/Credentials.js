// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY ,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKE,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const messaging = getMessaging(app);


// const vapidKey="BIz0mH49TdKx-95i69ULtj19X_aTeRp39-tqbotk6DS7xM8cZ8Ia6AzCervwKLaQPN5f5OBfnfpgOdIkOQ45CL0";
// const currentToken = evbUuvGdr1DLYJf0u92Z-U:APA91bE6wuT1XXiJO6vT46nA-aaCkKJCnGa43U8cYk2v60vIUBVB5kwp-efKiQ3v6jrlq-tXr20Gyigs4pj8V9-LJKSkS8VD0XGeWCsMEmPid84xkmiTZ3sq3RvWl6qpNzARG5MIEE3V


// getToken(messaging, { vapidKey })
//   .then( currentToken => {
//       if(currentToken) {
//       }else {
//         console.log('No registration token available. Request permission to generate one.');
//       }
//   }).catch( error => {
//       console.error(error)
//   })