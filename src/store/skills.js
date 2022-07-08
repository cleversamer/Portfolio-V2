import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "skills",
  initialState: {
    list: [],
  },
  reducers: {
    skillsSet: (skills, action) => {
      skills.list = action.payload.skills;
    },
  },
});

const { skillsSet } = slice.actions;

export const setSkills = (skills) => {
  return skillsSet({ skills });
};

export const selectSkills = createSelector(
  (state) => state.skills,
  (skills) => skills.list.filter((skill) => skill.visible)
);

export default slice.reducer;
