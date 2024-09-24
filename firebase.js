// 必要な関数を import
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzs-h6S8aSgJfZC5v7ejdtLyRpCcRcxI4",
  authDomain: "api-app-74bfe.firebaseapp.com",
  projectId: "api-app-74bfe",
  storageBucket: "api-app-74bfe.appspot.com",
  messagingSenderId: "1077344865268",
  appId: "1:1077344865268:web:7fb08a9ac2c7e4bd16c7a1",
};

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig);
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app);
