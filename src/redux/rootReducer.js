import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducers from "./iceCream/iceCreamReducers";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducers,
  user: userReducer,
});

export default rootReducer;
