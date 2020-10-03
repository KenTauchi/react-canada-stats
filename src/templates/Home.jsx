import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  dataPopulationImport,
  dataDeathTollImport,
} from "../reducks/dataSet/operations";

import { getDesc, getData } from "../reducks/dataSet/selectors";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const dataDesc = getDesc(selector);
  const dataData = getData(selector);
  console.log(selector);

  // Create map instance
  let chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition

  chart.geodataSource.url =
    "https://www.amcharts.com/lib/4/geodata/json/canadaLow.json";

  let data = dataData;

  chart.geodataSource.events.on("parseended", function (ev) {
    polygonSeries.data = data;
  });

  // Set projection
  chart.projection = new am4maps.projections.Mercator();

  // Create map polygon series
  let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  //Set min/max fill color for each area
  polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: chart.colors.getIndex(1).brighten(1),
    max: chart.colors.getIndex(1).brighten(-0.3),
  });

  // Make map load polygon data (state shapes and names) from GeoJSON
  polygonSeries.useGeodata = true;

  // Set up heat legend
  let heatLegend = chart.createChild(am4maps.HeatLegend);
  heatLegend.series = polygonSeries;
  heatLegend.align = "right";
  heatLegend.width = am4core.percent(25);
  heatLegend.marginRight = am4core.percent(4);
  heatLegend.minValue = 0;
  heatLegend.maxValue = 40000000;
  heatLegend.valign = "bottom";

  // Set up custom heat map legend labels using axis ranges
  let minRange = heatLegend.valueAxis.axisRanges.create();
  minRange.value = heatLegend.minValue;
  minRange.label.text = "Little";
  let maxRange = heatLegend.valueAxis.axisRanges.create();
  maxRange.value = heatLegend.maxValue;
  maxRange.label.text = "A lot!";

  // Blank out internal heat legend value axis labels
  heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (
    labelText
  ) {
    return "";
  });

  // Configure series tooltip
  let polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}: {value}";
  polygonTemplate.nonScalingStroke = true;
  polygonTemplate.strokeWidth = 0.5;

  // Create hover state and set alternative fill color
  let hs = polygonTemplate.states.create("hover");
  hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);

  return (
    <div>
      <div id="chartdiv" style={{ width: "80%", height: "400px" }}></div>
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
