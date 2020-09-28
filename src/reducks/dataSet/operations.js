import { dataImportAction } from "./action";
import { push } from "connected-react-router";

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

export const dataImport = () => {
  return async (dispatch, getState) => {
    const provs = await fetch("https://api.covid19tracker.ca/provinces")
      .then((response) => response.json())
      .catch(() => null);

    let provDataArr = [];

    provs.forEach((prov) => {
      let provId = "CA-" + prov.code;
      let provVal = prov.population;
      let provObj = {
        id: provId,
        value: provVal,
      };

      provDataArr.push(provObj);
    });

    dispatch(dataImportAction(provDataArr));
  };
};
