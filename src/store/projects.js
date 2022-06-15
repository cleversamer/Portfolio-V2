import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "projects",
  initialState: {
    list: [],
  },
  reducers: {
    skillsUpdated: (projects, action) => {
      projects.list = action.payload.data;
    },
  },
});

const { projectsUpdated } = slice.actions;

export const updateProjects = (data) => projectsUpdated({ data });

export const getProjects = createSelector(
  (state) => state.projects,
  (projects) => projects.list
);

export default slice.reducer;
