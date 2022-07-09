import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: process.env["REACT_APP_FIREBASE_AUTH_DOMAIN"],
  projectId: process.env["REACT_APP_FIREBASE_PROJECT_ID"],
  storageBucket: process.env["REACT_APP_FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: process.env["REACT_APP_FIREBASE_MESSAGING_SENDER_ID"],
  appId: process.env["REACT_APP_FIREBASE_APP_ID"],
};

initializeApp(config);

const db = getFirestore();

const skillsRef = collection(db, "skills");
const skillSetsRef = collection(db, "skillSets");
const projectsRef = collection(db, "projects");
export const visitorsRef = collection(db, "visitors");
export const actionsRef = collection(db, "actions");
export const blockedRef = collection(db, "blocked");

export const skillsQuery = query(skillsRef, orderBy("order", "asc"));
export const skillSetsQuery = query(skillSetsRef, orderBy("order", "asc"));
export const projectsQuery = query(projectsRef, orderBy("order", "desc"));

export default db;
