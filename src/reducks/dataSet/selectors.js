import { createSelector } from "reselect";

const dataSetSelector = (state) => state.dataSet;

export const getDesc = createSelector([dataSetSelector], (state) => state.desc);
