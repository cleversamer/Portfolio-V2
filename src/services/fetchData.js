/* eslint-disable import/no-anonymous-default-export */
import { onSnapshot } from "firebase/firestore";
import { projectsQuery, skillsQuery, skillSetsQuery } from "../firebase";
import { setProjects } from "../store/projects";
import { setSkills } from "../store/skills";
import { setSkillSets } from "../store/skillSets";

export default function (
  dispatch,
  setProjectsFetched,
  setSkillsFetched,
  setSkillSetsFetched
) {
  const unsubscribe1 = onSnapshot(projectsQuery, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setProjects(data));
    setProjectsFetched(true);
  });

  const unsubscribe2 = onSnapshot(skillsQuery, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setSkills(data));
    setSkillsFetched(true);
  });

  const unsubscribe3 = onSnapshot(skillSetsQuery, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setSkillSets(data));
    setSkillSetsFetched(true);
  });

  return () => {
    unsubscribe1();
    unsubscribe2();
    unsubscribe3();
  };
}
