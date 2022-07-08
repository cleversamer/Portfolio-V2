import { combineReducers } from "@reduxjs/toolkit";
import projects from "./projects";
import skills from "./skills";
import skillSets from "./skillSets";

export default combineReducers({
  projects,
  skills,
  skillSets,
});
