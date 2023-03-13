import {getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHUp4LV-EQ4Bru8VvMedWfCqKQGl0Gi4I",
  authDomain: "chatgpt-clone-4a1ca.firebaseapp.com",
  projectId: "chatgpt-clone-4a1ca",
  storageBucket: "chatgpt-clone-4a1ca.appspot.com",
  messagingSenderId: "921937740778",
  appId: "1:921937740778:web:6a91458549b49d221de893"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };