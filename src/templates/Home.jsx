import React from "react";
// import "./App.css";

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { useDispatch, useSelector } from "react-redux";

import { dataImportAction } from "../reducks/dataSet/action";

import { dataImport } from "../reducks/dataSet/operations";

// am4core.useTheme(am4themes_animated);

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}>
      <button onClick={() => dispatch(dataImport())}>Show Map</button>
      Source: https://github.com/bapex/react-amcharts-map/blob/master/src/App.js
    </div>
  );
}

export default App;
