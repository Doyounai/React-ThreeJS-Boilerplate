import { FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

let firestore: Firestore;

export const FirestoreInit = (app: FirebaseApp) => {
  console.log('Init Firestore Service');
  firestore = getFirestore(app);
};

export const GetFirestore = (): Firestore => {
  return firestore;
};
