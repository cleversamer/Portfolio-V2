import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "projects",
  initialState: {
    list: [],
  },
  reducers: {
    projectsSet: (projects, action) => {
      projects.list = action.payload.projects;
    },
  },
});

const { projectsSet } = slice.actions;

export const setProjects = (projects) => {
  return projectsSet({ projects });
};

export const selectProjects = createSelector(
  (state) => state.projects,
  (projects) => projects.list.map((project) => ({ ...project, visible: true }))
);

export default slice.reducer;
