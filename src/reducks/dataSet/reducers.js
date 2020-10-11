import * as Actions from "./action";
import initialState from "../store/initialState";

// import { addChartData } from "./utils";

export const DataSetReducer = (state = initialState.dataSet, action) => {
  switch (action.type) {
    case Actions.DATA_IMPORT:
      return {
        ...state,
        desc: action.payload.desc,
        data: action.payload.data,
      };

    default:
      return state;
  }
};


// get data from action and decide how to change data in store.
// -> manager for the state in Store

// According to the action type, reducer decides how to change the state.