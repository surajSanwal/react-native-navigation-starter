import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class OperatorDashboard extends Component {
  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(OperatorDashboard);
