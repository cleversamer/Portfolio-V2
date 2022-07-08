import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "skillSets",
  initialState: {
    list: [],
  },
  reducers: {
    skillSetsSet: (skillSets, action) => {
      skillSets.list = action.payload.skillSets;
    },
  },
});

const { skillSetsSet } = slice.actions;

export const setSkillSets = (skillSets) => {
  return skillSetsSet({ skillSets });
};

export const selectSkillSets = createSelector(
  (state) => state.skillSets,
  (skillSets) => skillSets.list.filter((skillSet) => skillSet.visible)
);

export default slice.reducer;
