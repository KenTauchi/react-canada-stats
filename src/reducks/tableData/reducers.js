import * as Actions from "./action";
import initialState from "../store/initialState";

// import { addChartData } from "./utils";

export const getClickReducer = (state = initialState.dataTable, action) => {
  switch (action.type) {
    case Actions.CLICK_GET:
      return {
        ...state,
        province: action.payload.province,
        population: action.payload.population,
      };

    default:
      return state;
  }
};