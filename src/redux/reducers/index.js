import { combineReducers } from "redux";
import { prodList, prodByID, addToCart ,increCart ,decreCart} from "./productReducer.js";

const reducers = combineReducers({
  prodList: prodList,
  prodByID: prodByID,
  addToCart: addToCart,
  increCart: increCart,
  decreCart: decreCart,
});

export default reducers;
