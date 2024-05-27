import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2lm14rq7ZH1zNkMc398eFnDa-4Nr6PS4",
    authDomain: "slutprojektajs.firebaseapp.com",
    projectId: "slutprojektajs",
    storageBucket: "slutprojektajs.appspot.com",
    messagingSenderId: "647806440536",
    appId: "1:647806440536:web:657b56689a5f6bff26262d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };