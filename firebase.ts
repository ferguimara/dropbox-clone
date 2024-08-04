import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC5HT6hUBTlI4mh8T4vCTTs-E6bFx5We-s",
    authDomain: "dropbox-clone-dea6a.firebaseapp.com",
    projectId: "dropbox-clone-dea6a",
    storageBucket: "dropbox-clone-dea6a.appspot.com",
    messagingSenderId: "120584476362",
    appId: "1:120584476362:web:137a4eabb4e7d480c28633"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
