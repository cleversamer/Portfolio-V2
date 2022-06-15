import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "skills",
  initialState: {
    list: [],
  },
  reducers: {
    skillsUpdated: (skills, action) => {
      skills.list = action.payload.data;
    },
  },
});

const { skillsUpdated } = slice.actions;

export const updateSkills = (data) => skillsUpdated({ data });

export const getSkills = createSelector(
  (state) => state.skills,
  (skills) => skills.list
);

export default slice.reducer;
