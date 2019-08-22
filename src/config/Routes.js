import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import Home from "../containers/Home";
import Profile from "../containers/Profile";
import Login from "../containers/auth";
import Signup from "../containers/auth/Signup";
import MyNudgits from "../containers/MyNudgits";
import AuthMenu from "../components/sideMenu/AuthMenu";
import Find from "../containers/Find";

const registerRoutes = store => {
  Navigation.registerComponentWithRedux("Home", () => Home, Provider, store);
  Navigation.registerComponentWithRedux(
    "Profile",
    () => Profile,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux("Login", () => Login, Provider, store);
  Navigation.registerComponentWithRedux(
    "SignUp",
    () => Signup,
    Provider,
    store
  );

  Navigation.registerComponentWithRedux(
    "MyNudgits",
    () => MyNudgits,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "sideDrawerAuth",
    () => AuthMenu,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux("Find", () => Find, Provider, store);
};

export const commandListener = () =>
  Navigation.events().registerCommandListener((name, params) => {
    console.log(name, " invoked with params= ", params);
  });

export const ComponentDidAppearListener = () =>
  Navigation.events().registerComponentDidAppearListener((name, params) => {
    console.log(name, " Appeard with params= ", params);
  });

export default registerRoutes;
