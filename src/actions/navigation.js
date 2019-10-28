import {Navigation} from 'react-native-navigation';

export const push = (componentId, screen, title = '', passProps = {}) => {
  Navigation.push(componentId, {
    component: {
      name: screen,
      passProps,
      options: {
        topBar: {
          title: {
            text: title,
          },
        },
      },
    },
  });
};

export const pop = componentId => {
  Navigation.pop(componentId);
};

export const popToRoot = componentId => {
  Navigation.popToRoot(componentId);
};

export const setStackRoot = (componentId, Screen, title = '') => {
  Navigation.setStackRoot(componentId, [
    {
      component: {
        name: Screen,
        passProps: {
          text: title,
        },
        options: {
          animations: {
            setStackRoot: {
              enabled: true,
            },
          },
        },
      },
    },
  ]);
};

export const showModal = (screen, title, passProps) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: screen,
            passProps,
            options: {
              topBar: {
                title: {
                  text: title,
                },
              },
            },
          },
        },
      ],
    },
  });
};

export const dismissModal = componentId => {
  Navigation.dismissModal(componentId);
};

export const dismissAllModal = componentId => {
  Navigation.dismissAllModals(componentId);
};

export const mergeOption = (
  componentId,
  topBar,
  bottomTabs,
  bottomTab,
  sideMenu,
  overlay,
) => {
  Navigation.mergeOptions(componentId, {
    topBar,
    bottomTabs,
    bottomTab,
    sideMenu,
    overlay,
  });
};
