export const DATA_IMPORT = "DATA_IMPORT";
export const dataImportAction = (dataFromOp) => {
  return {
    type: "DATA_IMPORT",
    payload: dataFromOp,
  };
};
