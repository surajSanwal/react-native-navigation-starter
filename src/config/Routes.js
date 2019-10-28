import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import Login from '../containers/auth';
import {storeObj} from '../store';
import Home from '../containers/dashboard';
import History from '../containers/history';
import Notifications from '../containers/notifications';

const registerRoutes = store => {
  Navigation.registerComponentWithRedux('SignIn', () => Login, Provider, store);
  Navigation.registerComponentWithRedux('Home', () => Home, Provider, store);
  Navigation.registerComponentWithRedux(
    'history',
    () => History,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'notifications',
    () => Notifications,
    Provider,
    store,
  );
};

export const commandListener = () =>
  Navigation.events().registerCommandListener((name, params) => {
    // eslint-disable-next-line eslint-comments/no-unlimited-disable
    console.log(name, ' invoked with params= ', params);
  });

export const ComponentDidAppearListener = () =>
  Navigation.events().registerComponentDidAppearListener(
    (component, params) => {
      storeObj.dispatch({
        type: 'SCREEN_LISTENER',
        payload: {component, params},
      });
    },
  );
export default registerRoutes;
