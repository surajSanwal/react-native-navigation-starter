import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("props===>profile", this.props);
  }
  onChange = ({ nativeEvent: { eventCount, target, text } }) => {
    console.log(eventCount, target, text);
  };
  render() {
    console.log("props===>profile11111", this.props);
    return (
      <View style={{ flex: 1 }}>
        <Text> Profile </Text>
        <TextInput
          placeholder={"TextInput"}
          style={{ height: 50 }}
          onChange={this.onChange}
        />
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
