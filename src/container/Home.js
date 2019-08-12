import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }
  navigate = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "Profile",
        passProps: {
          text: "Pushed screen"
        },
        options: {
          topBar: {
            title: {
              text: "Pushed screen title"
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.navigate}> Home</Text>
      </View>
    );
  }
}

export default Home;
