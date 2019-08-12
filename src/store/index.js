import { createStore, applyMiddleware } from "redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import reducers from "../reducers";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [],
  whitelist: []
};
export default () => {
  return createStore(
    persistCombineReducers(persistConfig, reducers),
    {},
    applyMiddleware(logger, thunk)
  );
};
