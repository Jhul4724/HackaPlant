import { initializeApp, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { getStorage } from "firebase-admin/storage"
import serviceAccount from "./certs/serviceAccountKey.json" assert {type: "json"};

const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL: "https://hackaplant-default-rtdb.firebaseio.com",
    storageBucket: "hackaplant.appspot.com"
});

const database = getDatabase(app);
const storage = getStorage(app)

export { database, storage };