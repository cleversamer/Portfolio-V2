import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  doc,
} from "firebase/firestore";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: "cleversamer.firebaseapp.com",
  projectId: "cleversamer",
  storageBucket: "cleversamer.appspot.com",
  messagingSenderId: "1040549409564",
  appId: "1:1040549409564:web:093209eac678aab46540d9",
};

initializeApp(config);

const db = getFirestore();

const skillsRef = collection(db, "skills");
const skillSetsRef = collection(db, "skillSets");
const projectsRef = collection(db, "projects");

export const skillsQuery = query(skillsRef, orderBy("order", "asc"));
export const skillSetsQuery = query(skillSetsRef, orderBy("order", "asc"));
export const projectsQuery = query(projectsRef, orderBy("order", "desc"));
export const usersInfoDocRef = doc(db, "users", "amh3EALGMDD1QbGME4yd");
