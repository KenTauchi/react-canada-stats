import { createSelector } from "reselect";

const dataTableSelector = (state) => state.dataTable;

export const getDataTable = createSelector([dataTableSelector], (state) => state);