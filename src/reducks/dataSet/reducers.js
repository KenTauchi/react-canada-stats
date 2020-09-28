import * as Actions from "./action";
import initialState from "../store/initialState";

import { addChartData } from "./utils";

export const DataSetReducer = (state = initialState.dataSet, action) => {
  switch (action.type) {
    case Actions.DATA_IMPORT:
      return {
        ...state,
        dataSet: addChartData(action.payload),
      };

    default:
      return state;
  }
};
