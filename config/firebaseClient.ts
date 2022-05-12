// import firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: "YOUR API KEY",
//   authDomain: "YOUR AUTH DOMAIN",
//   databaseURL: "YOUR DATABASE URL",
//   projectId: "YOUR PROJECT ID ",
//   storageBucket: "YOUR STORAGE BUCKET",
//   messagingSenderId: "YOUR SENDER ID ",
//   appId: "YOUR APP ID"
// };
// try {
//   firebase.initializeApp(firebaseConfig);
// } catch(err){
//   if (!/already exists/.test(err.message)) {
//     console.error('Firebase initialization error', err.stack)}
// }
// const fire = firebase;
// export default fire;

// import {initializeApp} from "firebase/app";
// import {getFirestore} from "firebase/firestore";


// initializeApp( {
//     apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
//  });

//  const fire = getFirestore();
//  export default fire;

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage'

export const firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain:`${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}.firebaseapp.com`,
    databaseURL:`${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket:`${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}.appspot.com`,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};
if (process.env.FIREBASE_CLIENT_EMAIL && !firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
};

export default firebase;