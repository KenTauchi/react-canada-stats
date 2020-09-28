export const DATA_IMPORT = "DATA_IMPORT";
export const dataImportAction = (data) => {
  return {
    type: "DATA_IMPORT",
    payload: data,
  };
};
