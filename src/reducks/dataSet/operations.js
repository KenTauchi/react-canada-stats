import { dataImportAction } from "./action";
import { push } from "connected-react-router";

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

export const dataPopulationImport = () => {
  return async (dispatch, getState) => {
    const provs = await fetch(
      "https://cors-anywhere.herokuapp.com/" +
        "https://api.covid19tracker.ca/provinces"
    )
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

    dispatch(
      dataImportAction({
        desc: "Population Map (*hover over map)",
        data: provDataArr,
      })
    );
  };
};

export const dataDeathTollImport = () => {
  return async (dispatch, getState) => {
    const provs = await fetch(
      "https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/Join_Features_to_Enriched_Population_Case_Data_By_Province_Polygon/FeatureServer/0/query?where=1%3D1&outFields=NAME,Abbreviation,Deaths&returnGeometry=false&outSR=4326&f=json"
    )
      .then((response) => response.json())
      .catch(() => null);

    let provDataArr = [];

    provs.features.forEach((prov) => {
      let provId = "CA-" + prov.attributes.Abbreviation;
      let provVal = prov.attributes.Deaths;

      let provObj = {
        id: provId,
        value: provVal,
      };

      provDataArr.push(provObj);
    });

    dispatch(
      dataImportAction({
        desc: "COVID Death Toll Map (*hover over map)",
        data: provDataArr,
      })
    );
  };
};
