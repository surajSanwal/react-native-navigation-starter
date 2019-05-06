import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Navigation } from "react-native-navigation";

export default class Tab2 extends React.Component {
  constructor(props) {
    super(props);
    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
  }
  componentWillMount() {}

  navigationButtonPressed({ buttonId }) {
    !this.isSideDrawerVisible
      ? (this.isSideDrawerVisible = true)
      : (this.isSideDrawerVisible = false);

    if (buttonId === "buttonOne") {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: this.isSideDrawerVisible
          }
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Tab 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
