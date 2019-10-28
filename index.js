/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import registerRoutes, {
  commandListener,
  ComponentDidAppearListener,
} from './src/config/Routes';
import {goHome, goToAuth} from './src/config/Navigator';
import setup from './src/store';
console.disableYellowBox = true;

Navigation.events().registerAppLaunchedListener(() => {
  setup()
    .then(store => {
      registerRoutes(store);
      commandListener();
      ComponentDidAppearListener();
      let {
        user: {isLogin},
      } = store.getState();
      Navigation.setDefaultOptions({
        layout: {
          direction: 'ltr',
        },
      });

      if (isLogin) {
        goHome();
      } else {
        goToAuth();
      }
    })
    .catch(e => console.warn('error e ', e));
});
