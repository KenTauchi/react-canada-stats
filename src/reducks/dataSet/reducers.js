import * as Actions from "./action";
import initialState from "../store/initialState";


// import { addChartData } from "./utils";

export const DataSetReducer = (state = initialState.dataSet, action) => {

  let found = state.data.find(prop => prop.id === action.payload.data)
  


  switch (action.type) {
    case Actions.DATA_IMPORT:
      return {
        ...state,
        desc: action.payload.desc,
        data: action.payload.data,
      };
    case Actions.CLICK_GET:
      return {
        ...state,
        province: action.payload.province,
        population: found.value
      };

    default:
      return state;
  }
};


// get data from action and decide how to change data in store.
// -> manager for the state in Store

// According to the action type, reducer decides how to change the state.