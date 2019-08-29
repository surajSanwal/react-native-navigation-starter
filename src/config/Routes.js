import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import Home from "../containers/Home";
import Profile from "../containers/Profile";
import Login from "../containers/auth";
import Signup from "../containers/auth/Signup";
import MyNudgits from "../containers/MyNudgits";
import AuthMenu from "../components/sideMenu/AuthMenu";
import OperatorMenu from "../components/sideMenu/OperatorMenu";
import CustomerMenu from "../components/sideMenu/CustomerMenu";
import Find from "../containers/Find";
import VerifyCustomer from "../containers/auth/VerifyCustomer";
import Customer from "../containers/customer";
import Operator from "../containers/operator";
import SetupProfile from "../containers/auth/SetupProfile";
import Payment from "../containers/Profile/Payment";
import OperatorProfileCompliance from "../containers/operator/OperatorProfileCompliance";
import OperatorProfileServices from "../containers/Profile/OperatorProfileServices";
import Notification from "../containers/notification";
import WebViewContainer from "../containers/WebViewContainer";

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
  Navigation.registerComponentWithRedux(
    "sideDrawerOperator",
    () => OperatorMenu,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "sideDrawerCustomer",
    () => CustomerMenu,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux("Find", () => Find, Provider, store);
  Navigation.registerComponentWithRedux(
    "VerifyCustomer",
    () => VerifyCustomer,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Customer",
    () => Customer,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Operator",
    () => Operator,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "SetupProfile",
    () => SetupProfile,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Profile",
    () => Profile,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "OperatorProfileCompliance",
    () => OperatorProfileCompliance,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Payment",
    () => Payment,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "OperatorProfileServices",
    () => OperatorProfileServices,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Notification",
    () => Notification,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "WebView",
    () => WebViewContainer,
    Provider,
    store
  );
};

export const commandListener = () =>
  Navigation.events().registerCommandListener((name, params) => {
    console.log(name, " invoked with params= ", params);
  });

export const componentDidAppearListener = store =>
  Navigation.events().registerComponentDidAppearListener(
    ({ componentId, componentName }) => {
      store.dispatch({
        type: "SCREEN_LISTENER",
        payload: { componentId, componentName }
      });
    }
  );

export default registerRoutes;
