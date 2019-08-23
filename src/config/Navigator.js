import { Navigation } from "react-native-navigation";
import constants from "../constants";

export const auth = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
            id: "sideDrawerAuth",
            name: "sideDrawerAuth"
          }
        },
        center: {
          stack: {
            id: "AUTH_STACK",
            children: [
              {
                component: {
                  name: "Home",
                  passProps: {
                    text: "React Native"
                  },
                  options: {
                    topBar: {
                      drawBehind: true,
                      visible: false
                    },
                    layout: {
                      direction: "ltr", // Supported directions are: 'rtl', 'ltr'
                      backgroundColor: constants.Colors.Black,
                      orientation: ["portrait", "landscape"] // An array of supported orientations
                    },
                    modalPresentationStyle: "overCurrentContext"
                  }
                }
              }
            ]
          }
        }
      }
    }
  });
};

export const operator = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
            id: "sideDrawerOperator",
            name: "sideDrawerOperator"
          }
        },
        center: {
          // bottomTabs: {
          //   id: "bottomAuth",
          // children: [
          // {
          stack: {
            id: "AUTH_STACK",
            children: [
              {
                component: {
                  name: "Operator",
                  passProps: {
                    text: "React Native"
                  },
                  options: {
                    topBar: {
                      drawBehind: true,
                      visible: false
                    },
                    layout: {
                      direction: "ltr", // Supported directions are: 'rtl', 'ltr'
                      backgroundColor: constants.Colors.Black,
                      orientation: ["portrait", "landscape"] // An array of supported orientations
                    },
                    modalPresentationStyle: "overCurrentContext"
                  }
                }
              }
            ]
          }
          // }
          // ]
          // }
        }
      }
    }
  });
};

export const customer = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
            id: "sideDrawerCustomer",
            name: "sideDrawerCustomer"
          }
        },
        center: {
          // bottomTabs: {
          //   id: "bottomAuth",
          // children: [
          // {
          stack: {
            id: "AUTH_STACK",
            children: [
              {
                component: {
                  name: "Customer",
                  passProps: {
                    text: "React Native"
                  },
                  options: {
                    topBar: {
                      drawBehind: true,
                      visible: false
                    },
                    layout: {
                      direction: "ltr", // Supported directions are: 'rtl', 'ltr'
                      backgroundColor: constants.Colors.Black,
                      orientation: ["portrait", "landscape"] // An array of supported orientations
                    },
                    modalPresentationStyle: "overCurrentContext"
                  }
                }
              }
            ]
          }
          // }
          // ]
          // }
        }
      }
    }
  });
};
