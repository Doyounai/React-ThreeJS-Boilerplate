import { FirebaseApp, initializeApp } from 'firebase/app';

import { FirestoreInit } from './service/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_CRED_APIKEY || undefined,
  authDomain: import.meta.env.VITE_FIREBASE_CRED_AUTHDOMAIN || undefined,
  databaseURL: import.meta.env.VITE_FIREBASE_CRED_DATABASEURL || undefined,
  projectId: import.meta.env.VITE_FIREBASE_CRED_PROJECTID || undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_CRED_STORAGEBUCKET || undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_CRED_MESSAGINGSENDERID || undefined,
  appId: import.meta.env.VITE_FIREBASE_CRED_APPID || undefined,
};

let app: FirebaseApp;

export const InitFirebase = async () => {
  app = initializeApp(firebaseConfig);
  console.log('Init Firebase App');

  FirestoreInit(app);
};
