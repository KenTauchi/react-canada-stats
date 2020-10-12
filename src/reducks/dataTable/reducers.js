import * as Actions from "./action";
import {dataTableState} from "../store/initialState";

export const DataTableReducer = (state = dataTableState, action) => {

//   let found = state.data.find(prop => prop.id === action.payload.data)
  
  switch (action.type) {
    case Actions.CLICK_GET:
      return {
        ...state,
        province: action.payload.province,
        population: action.payload.population
      };

    default:
      return state;
  }
};