import { createSelector } from "reselect";

const dataSetSelector = (state) => state.dataSet;

export const getDesc = createSelector([dataSetSelector], (state) => state.desc);
export const getData = createSelector([dataSetSelector], (state) => state.data);
export const getProv = createSelector([dataSetSelector], (state) => state.province);
export const getPop = createSelector([dataSetSelector], (state) => state.population);
