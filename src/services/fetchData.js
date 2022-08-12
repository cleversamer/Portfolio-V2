/* eslint-disable import/no-anonymous-default-export */
import { getDocs } from "firebase/firestore";
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
  getDocs(projectsQuery)
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ratingInfo: { count: 0, value: 0 },
        ...doc.data(),
      }));
      dispatch(setProjects(data));
      setProjectsFetched(true);
    })
    .catch((err) => console.log(err));

  getDocs(skillsQuery)
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setSkills(data));
      setSkillsFetched(true);
    })
    .catch((err) => console.log(err));

  getDocs(skillSetsQuery)
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setSkillSets(data));
      setSkillSetsFetched(true);
    })
    .catch((err) => console.log(err));
}
