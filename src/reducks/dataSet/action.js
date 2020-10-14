export const DATA_IMPORT = "DATA_IMPORT";


export const dataImportAction = (dataFromOp) => {
  return {
    type: "DATA_IMPORT",
    payload: dataFromOp,
  };
};


// get a state change request from the user and pass the request to reducer.
// Action just takes plain object. Action just wants to know what data needs to be passed to reducer and set to the state.
// It is reducers roll to decide how to change the data to which state, cuz Action is just passing data.
