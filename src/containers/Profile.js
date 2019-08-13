import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("props===>profile", this.props);
  }
  render() {
    console.log("props===>profile11111", this.props);
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text> Profile </Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {}
)(Profile);
