/**
 * @format
 */
import { Navigation } from "react-native-navigation";
// import App from "./App";
import registerRoutes, { commandListener } from "./src/config/Routes";
import { auth } from "./src/config/Navigator";
import setup from "./src/store";
registerRoutes(setup());
commandListener();
Navigation.events().registerAppLaunchedListener(() => {
  auth();
});
