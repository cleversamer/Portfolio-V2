import { combineReducers } from "@reduxjs/toolkit";
import skills from "./skills";
import projects from "./projects";
import skillSets from "./skillSets";

export default combineReducers({
  skills,
  projects,
  skillSets,
});
