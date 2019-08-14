/**
 * @format
 */
import { Navigation } from "react-native-navigation";
// import App from "./App";
import registerRoutes, {
  commandListener,
  ComponentDidAppearListener
} from "./src/config/Routes";
import { auth } from "./src/config/Navigator";
import setup from "./src/store";

// StatusBar.setBackgroundColor();
registerRoutes(setup());
commandListener();
ComponentDidAppearListener();
Navigation.events().registerAppLaunchedListener(() => {
  auth();
});
