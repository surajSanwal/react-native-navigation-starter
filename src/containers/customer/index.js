import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import ArrowButton from "../../components/common/ArrowButton";

class CustomerDashboard extends Component {
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
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>My Naugits</Text>
            </View>
          </View>
          <View style={styles.buttonsWrapper}>
            <ArrowButton
              name={"Current Job"}
              image={constants.Images.ArrowRightWhite}
              buttonReverse
              buttonStyle={styles.buttonStyle}
            />
            <ArrowButton
              name={"Past Job"}
              image={constants.Images.ArrowRightWhite}
              buttonReverse
              buttonStyle={styles.buttonStyle}
            />
            <ArrowButton
              name={"Find"}
              image={constants.Images.ArrowRightWhite}
              buttonReverse
              buttonStyle={styles.buttonStyle}
            />
            <ArrowButton
              name={"Message"}
              image={constants.Images.ArrowRightWhite}
              buttonReverse
              buttonStyle={styles.buttonStyle}
            />
            <ArrowButton
              name={"Favorites"}
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
  buttonStyle: {
    justifyContent: "space-between",
    width: "90%",
    borderBottomColor: constants.Colors.White,
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: moderateScale(10)
  },
  titleWrapper: {
    width: "50%",
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1
  },
  title: {
    ...constants.Fonts.ITCAvantGardeStdBold,
    fontSize: moderateScale(27),
    color: constants.Colors.Turquoise,
    paddingVertical: moderateScale(10)
  },
  buttonsWrapper: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(CustomerDashboard);
