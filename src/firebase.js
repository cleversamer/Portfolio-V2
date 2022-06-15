import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBalq8d3cMY8v3vFSdx0MbGyj_Tg9uj8qM",
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
export const projectsQuery = query(projectsRef, orderBy("order", "asc"));
