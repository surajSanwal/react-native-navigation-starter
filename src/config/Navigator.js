import {Navigation} from 'react-native-navigation';

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'SignIn',
              passProps: {
                title: 'Hello app',
              },
              options: {
                statusBar: {
                  visible: true,
                  style: 'light',
                  hideWithTopBar: true,
                  blur: true,
                },
                topBar: {
                  drawBehind: true,
                  visible: true,
                  animate: false,
                  title: {
                    text: 'Sign In ',
                    alignment: 'center',
                    color: '#000',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });

export const goHome = () => {
  let bottomTabs = [
    {
      stack: {
        id: 'MY_STACK',
        children: [
          {
            component: {
              name: 'Home',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Home',
                  //   icon: require('../assets/img/home.png'),
                  color: 'black',
                },
              },
            },
          },
        ],
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: 'History',
              options: {
                bottomTab: {
                  text: 'History',
                  fontSize: 12,
                  //   icon: require('../assets/img/history.png'),
                },
                topBar: {
                  hideOnScroll: true,
                  title: {
                    text: 'History',
                    color: 'white',
                  },
                  leftButtons: [
                    {
                      id: 'buttonOne',
                      //   icon: require('../assets/img/menu.png'),
                    },
                  ],
                  background: {
                    color: '#05B8CC',
                  },
                  drawBehind: false,
                  visible: false,
                  animate: true,
                },
              },
            },
          },
        ],
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: 'Notifications',
              options: {
                bottomTab: {
                  text: 'Notifications',
                  fontSize: 12,
                  //   icon: require('../assets/img/notifications.png'),
                },
                topBar: {
                  hideOnScroll: true,
                  title: {
                    text: 'Notifications',
                    color: 'white',
                  },
                  leftButtons: [
                    {
                      id: 'buttonOne',
                      //   icon: require('../assets/img/menu.png'),
                    },
                  ],
                  background: {
                    color: '#05B8CC',
                  },
                  drawBehind: false,
                  visible: false,
                  animate: true,
                },
              },
            },
          },
        ],
      },
    },
  ];

  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'sideDrawer',
            name: 'SideMenu',
          },
        },
        center: {
          bottomTabs: {
            id: 'BottomTabsId',
            children: bottomTabs,
          },
        },
      },
    },
  });
};
