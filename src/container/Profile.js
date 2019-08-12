import React, { Component } from "react";
import { Text, View } from "react-native";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("propss===>profile");
  }
  render() {
    console.log("propss===>profile11111", this.props);
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text> Profile </Text>
      </View>
    );
  }
}

export default Profile;
