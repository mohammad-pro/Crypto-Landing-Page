import { combineReducers } from "redux";
import reducer from "./Coins/getCoinsReducer";
import getEventReducer from "./EventCoins/getEventReducer";

const rootReducer = combineReducers({
  getCo: reducer,
  getEv: getEventReducer,
});

export default rootReducer;
