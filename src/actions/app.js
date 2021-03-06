import { Navigation, Constants } from "react-native-navigation";
import constants from "../constants";
import Toast from 'react-native-root-toast';
import * as Types from "../ActionTypes";
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

/**
 * 
 * @param {*} message 
 * @param {*} backgroundColor 
 * @param {*} textColor 
 * @param {*} duration 
 * @param {*} position 
 * @param {*} shadow 
 * @param {*} animation 
 * @param {*} hideOnPress 
 * @param {*} delay 
 * @param {*} onShow 
 * @param {*} onShown 
 * @param {*} onHide 
 * @param {*} onHidden 
 */
export const showToast = (message,backgroundColor=constants.Colors.Black,textColor=constants.Colors.White, duration = Toast.durations.LONG, position = Toast.positions.BOTTOM, shadow = true, animation = true, hideOnPress = true, delay = 0, onShow = () => { },onShown = () => { },onHide = () => { },onHidden = () => { }) => {
  return dispatch => {
    dispatch({ type: Types.SHOW_TOAST });
    Toast.show(message, {
    duration,
    position,
    shadow,
    animation,
    hideOnPress,
    delay,
    onShow,// calls on toast\`s appear animation start
    onShown,        // calls on toast\`s appear animation end.
    onHide,        // calls on toast\`s hide animation start.
    onHidden,        // calls on toast\`s hide animation end.
    backgroundColor,
    textColor,
})
    dispatch({type:Types.HIDE_TOAST})
  }
}