import React, {useEffect} from "react";

import DataTable from "../components/dataTable/DataTable"
import { useDispatch, useSelector } from "react-redux";
import { getDataSet } from "../reducks/dataSet/selectors"

import {
  dataPopulationImport,
  dataDeathTollImport,
} from "../reducks/dataSet/operations";

import Map from "../components/map/map"





function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
// you access to the current state with this Hooks.

  const dataSet = getDataSet(selector);
  
  console.log(selector);

  return (
    <div>
      <Map />
      <button onClick={() => {
        dispatch(dataPopulationImport())
      }}>
        Show Poplulation Map
      </button>
      <button onClick={() => dispatch(dataDeathTollImport())}>
        Show Covid Death Toll
      </button>
      <p>
        amChart Source:
        https://github.com/bapex/react-amcharts-map/blob/master/src/App.js
      </p>
      <h1>{dataSet.desc}</h1>
      <DataTable />
    </div>
  );
}

export default App;
