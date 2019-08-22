import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { push } from "../actions";
import constants from "../constants";
import { moderateScale } from "../helpers/ResponsiveFonts";
import SafeView from "../components/common/SafeView";
import ArrowButton from "../components/common/ArrowButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 99
  },
  buttonFont: {
    fontSize: moderateScale(34),
    color: constants.Colors.Black
  },
  buttonStyle: {
    borderBottomColor: constants.Colors.Black,
    borderBottomWidth: 1
  }
});

class MyNudgits extends Component {
  constructor(props) {
    super(props);
  }

  navigate(screen) {
    this.props.push(this.props.componentId, screen);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: constants.Colors.Turquoise }}>
        <SafeView
          title={""}
          componentId={this.props.componentId}
          backStyle={{ color: constants.Colors.Black }}
        >
          <View style={styles.container}>
            <View
              style={{
                borderBottomColor: constants.Colors.Black,
                borderBottomWidth: 1,
                width: "80%"
              }}
            >
              <Text
                style={{
                  color: constants.Colors.Black,
                  fontSize: moderateScale(36),
                  paddingVertical: moderateScale(10)
                }}
              >
                My Nudgits
              </Text>
            </View>

            <View
              style={{
                flex: 0.35,
                justifyContent: "space-around"
              }}
            >
              <ArrowButton
                name={"I'm a Customer"}
                textStyle={styles.buttonFont}
                onPress={() => this.navigate("SignUp")}
                buttonReverse
                buttonStyle={styles.buttonStyle}
              />
              <ArrowButton
                name={"I'm a Operator"}
                textStyle={styles.buttonFont}
                onPress={() => this.navigate("SignUp")}
                buttonReverse
                buttonStyle={styles.buttonStyle}
              />
            </View>
          </View>
        </SafeView>
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
)(MyNudgits);
