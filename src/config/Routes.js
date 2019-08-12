import { Navigation } from "react-native-navigation";
import Home from "../container/Home";
import Profile from "../container/Profile";

const wrapeScene = ReduxScreen => props => {
  <>
    <ReduxScreen />
  </>;
};

const registerRoutes = store => {
  console.log("store===>", store.getState());

  Navigation.registerComponent("Home", () => Home);
  Navigation.registerComponent("Profile", () => Profile);
};

export const commandListener = () =>
  Navigation.events().registerCommandListener((name, params) => {
    console.log(name, " invoked with params= ", params);
  });

export default registerRoutes;
