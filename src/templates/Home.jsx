import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  dataPopulationImport,
  dataDeathTollImport,
} from "../reducks/dataSet/operations";

import { getDesc } from "../reducks/dataSet/selectors";

// am4core.useTheme(am4themes_animated);

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const dataDesc = getDesc(selector);
  console.log(selector);

  return (
    <div>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      <button onClick={() => dispatch(dataPopulationImport())}>
        Show Poplulation Map
      </button>
      <button onClick={() => dispatch(dataDeathTollImport())}>
        Show Covid Death Toll
      </button>
      <p>
        amChart Source:
        https://github.com/bapex/react-amcharts-map/blob/master/src/App.js
      </p>
      <h1>{dataDesc}</h1>
    </div>
  );
}

export default App;
