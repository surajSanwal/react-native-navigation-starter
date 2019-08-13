import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import Home from "../containers/Home";
import Profile from "../containers/Profile";

const registerRoutes = store => {
  Navigation.registerComponentWithRedux("Home", () => Home, Provider, store);
  Navigation.registerComponentWithRedux(
    "Profile",
    () => Profile,
    Provider,
    store
  );
};

export const commandListener = () =>
  Navigation.events().registerCommandListener((name, params) => {
    console.log(name, " invoked with params= ", params);
  });

export default registerRoutes;
