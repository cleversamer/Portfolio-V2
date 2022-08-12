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

    projectRatingInfoSer: (projects, action) => {
      const index = projects.list.findIndex(
        (p) => p.id === action.payload.projectId
      );
      if (index === -1) return;
      projects.list[index].ratingInfo = action.payload.ratingInfo;
      projects.list[index].rating = action.payload.rating;
    },
  },
});

const { projectsSet, projectRatingInfoSer } = slice.actions;

export const setProjects = (projects) => {
  return projectsSet({ projects });
};

export const setProjectRatingInfo = (projectId, ratingInfo, rating) => {
  return projectRatingInfoSer({ projectId, ratingInfo, rating });
};

export const selectProjects = createSelector(
  (state) => state.projects,
  (projects) => projects.list.map((project) => ({ ...project, visible: true }))
);

export default slice.reducer;
