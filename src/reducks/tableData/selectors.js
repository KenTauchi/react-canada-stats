import { createSelector } from "reselect";

const tableDataSelector = (state) => state.dataTable;

export const getProv = createSelector([tableDataSelector], (state) => state.province);
export const getPop = createSelector([tableDataSelector], (state) => state.population);