import { Navigation } from "react-native-navigation";
import constants from "../constants";

export const push = (componentId, screen, passProps = {}) => {
  return () => {
    Navigation.push(componentId, {
      component: {
        name: screen,
        passProps,
        options: {
          sideMenu: {
            right: {
              visible: false,
              enabled: false
            }
          },
          topBar: {
            visible: false,
            drawBehind:true
          },
           layout: {
                  direction: "ltr", // Supported directions are: 'rtl', 'ltr'
                  backgroundColor: constants.Colors.Black,
                  orientation: ["portrait", "landscape"] // An array of supported orientations
                },
                modalPresentationStyle: "overCurrentContext"
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
 * Navigate to a new page and clear the backStack.
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
        right: {
          visible: drawerOpen
        }
      }
    });
  };
};
export const setScreenStack = (componentId, stack, passProps= {},visible,) => {
  return () => {
    Navigation.setStackRoot(componentId, {
      component: {
        name: stack,
        passProps,
        options: {
          topBar: {
            visible: false,
            drawBehind: true
          },
          bottomTabs: {
            visible,
            drawBehind: true
          },
          layout: {
            direction: "ltr", // Supported directions are: 'rtl', 'ltr'
            backgroundColor: constants.Colors.Black,
            orientation: ["portrait", "landscape"] // An array of supported orientations
          },
          modalPresentationStyle: "overCurrentContext"
        
        }
      }
    });
  };
};
