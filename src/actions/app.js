import { Navigation } from "react-native-navigation";

export const push = (componentId, screen, passProps = {}) => {
  return () => {
    Navigation.push(componentId, {
      component: {
        name: screen,
        passProps,
        options: {
          sideMenu: {
            left: {
              visible: false,
              enabled: false
            }
          }
        }
      }
    });
  };
};

export const pop = componentId => {
  return () => {
    Navigation.pop(componentId);
  };
};

/**
 * Navigate to a new page and clear the backstack.
 */
// export const resetTo = newScreen => {
//   return dispatch => {
//     dispatch(navigate(newScreen, true));
//   };
// };

export const mergeOptions = (componentId, drawerOpen) => {
  return () => {
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: drawerOpen
        }
      }
    });
  };
};
export const setScreenStack = (componentId, stack, visible) => {
  return () => {
    Navigation.setStackRoot(componentId, {
      component: {
        name: stack,
        options: {
          topBar: {
            title: {
              text: "Home"
            }
          },
          bottomTabs: {
            visible,
            drawBehind: true
          }
        }
      }
    });
  };
};
