import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import ArrowButton from "../../components/common/ArrowButton";

class CompleteSignup extends Component {
  render() {
    return (
      <SafeView
        componentId={this.props.componentId}
        title={"Home"}
        hideBack
        drawerEnabled
      >
        <View style={styles.container}>
          <View>
            <View style={{ width: "50%" }}>
              <Text style={styles.wellDone}>Well done… </Text>
              <Text style={styles.msg}>
                to have a seamless experience complete your profile and payment
                details so you can nudgit anytime or simply begin searching for
                your digger now
              </Text>
            </View>
          </View>
          <View style={styles.arrowButtons}>
            <ArrowButton
              name={"Start Searching"}
              image={constants.Images.ArrowRightWhite}
              buttonReverse
              buttonStyle={styles.buttonStyle}
            />
            <ArrowButton
              name={"complete profile"}
              image={constants.Images.ArrowRightWhite}
              buttonReverse
              buttonStyle={styles.buttonStyle}
            />
          </View>
        </View>
      </SafeView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: moderateScale(10)
  },
  buttonStyle: {
    justifyContent: "space-between",
    width: "90%",
    borderBottomColor: constants.Colors.White,
    borderBottomWidth: 1
  },
  wellDone: {
    ...constants.Fonts.ITCAvantGardeStdBkObl,
    fontSize: moderateScale(32),
    color: constants.Colors.White,
    paddingVertical: moderateScale(10)
  },
  msg: {
    ...constants.Fonts.ITCAvantGardeStdBk,
    fontSize: moderateScale(15),
    color: constants.Colors.White,
    paddingVertical: moderateScale(10)
  },
  arrowButtons: { justifyContent: "space-around", alignItems: "center" }
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(CompleteSignup);
