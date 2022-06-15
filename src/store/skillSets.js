import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "skillSets",
  initialState: {
    list: [],
  },
  reducers: {
    skillSetsUpdated: (skillSets, action) => {
      skillSets.list = action.payload.data;
    },
  },
});

const { skillSetsUpdated } = slice.actions;

export const updateSkillSets = (data) => skillSetsUpdated({ data });

export const getSkillSets = createSelector(
  (state) => state.skillSets,
  (skillSets) => skillSets.list
);

export default slice.reducer;
