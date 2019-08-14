import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { push } from "../actions";
import constants from "../constants";
import { moderateScale } from "../helpers/ResponsiveFonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    backgroundColor: constants.Colors.Black
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  navigate = screen => {
    this.props.push(this.props.componentId, screen);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "#fff",
            fontSize: moderateScale(20)
          }}
          onPress={() => this.navigate("Login")}
        >
          Click to Login
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: moderateScale(20)
          }}
          onPress={() => this.navigate("SignUp")}
        >
          Click to SignUp
        </Text>
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
  { push }
)(Home);
