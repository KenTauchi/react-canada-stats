export const CLICK_GET = "CLICK_GET";
export const clickGet = (provinceData, populationData) => {
  return {
    type: "CLICK_GET",
    payload: {
        province: provinceData,
        population: populationData
    },
  };
};