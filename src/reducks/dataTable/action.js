export const CLICK_GET = "CLICK_GET";
export const clickGet = (province, population) => {
    return {
      type: "CLICK_GET",
      payload: {
        province: province,
        population: population,
        
      }
    };
  };