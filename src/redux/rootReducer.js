import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { inputsReducer } from "./inputsReducer";
import { flightDataReducer } from "./flightDataReducer";

export const rootReducer = combineReducers({
  inputs: inputsReducer,
  app: appReducer,
  flightData: flightDataReducer
});
