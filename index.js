/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import registerRoutes, {
  commandListener,
  componentDidAppearListener
} from "./src/config/Routes";
// import { NODE_ENV } from "react-native-dotenv";
import { auth, customer, operator } from "./src/config/Navigator";
import setup from "./src/store";
console.disableYellowBox = true;
// console.ignoredYellowBox = ["Warning: ..."];
console.ignoredYellowBox = [
  "Encountered an error loading page", // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  "Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  "Task orphaned for request ",
  "Remote debugger is in a background tab which may cause apps to perform slowly"
];

// console.log("environment", process.env);
Navigation.events().registerAppLaunchedListener(() => {
  setup()
    .then(store => {
      let {
        user: { isLogin, role }
      } = store.getState();

      registerRoutes(store);
      commandListener();
      componentDidAppearListener(store);
      if (isLogin) {
        switch (role) {
          case "customer":
            customer();
            return;
          case "operator":
            operator();
            return;
          default:
            auth();
        }
      } else {
        auth();
      }
    })
    .catch(e => console.warn("error e ", e));
});
