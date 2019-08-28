import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import ArrowButton from "../../components/common/ArrowButton";

class Notification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeView
        hideBack
        componentId={this.props.componentId}
        title={"Home"}
        drawerEnabled
      >
        <View style={{ flex: 1 }}>
          <View style={styles.buttonsContainer}>
            <ArrowButton
              name={"Jobs pending"}
              image={constants.Images.ArrowRightGreen}
              buttonStyle={styles.buttonStyle}
              style={styles.buttonImage}
              textStyle={[
                styles.textBelow,
                constants.Fonts.ITCAvantGardeStdBold
              ]}
              textView={styles.textView}
            />
            <View style={styles.horizontalView}></View>
            <ArrowButton
              name={"Messages"}
              image={constants.Images.ArrowRightGreen}
              style={styles.buttonImage}
              buttonStyle={styles.buttonStyle}
              textStyle={[
                styles.textBelow,
                constants.Fonts.ITCAvantGardeStdBold
              ]}
              textView={styles.textView}
              disabled={false}
            />
            <View style={styles.horizontalView}></View>
          </View>
        </View>
      </SafeView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    borderBottomColor: constants.Colors.Placeholder
  },
  buttonsContainer: {
    marginHorizontal: moderateScale(25)
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "#1C2025"
  },
  Text: {
    color: constants.Colors.White,
    fontSize: moderateScale(24)
  },
  textBelow: {
    color: constants.Colors.White,
    fontSize: moderateScale(24),
    borderBottomWidth: 1,
    ...constants.Fonts.ITCAvantGardeStdBold
  },
  Image: {
    height: moderateScale(75),
    width: moderateScale(75),
    borderRadius: 40
  },
  buttonImage: {
    height: moderateScale(65),
    width: moderateScale(65),
    marginRight: moderateScale(25)
  },
  buttonStyle: {
    marginBottom: moderateScale(10)
  },
  textView: {
    borderBottomColor: constants.Colors.White,
    borderBottomWidth: 1
  },
  horizontalView: {
    borderWidth: 0.5,
    borderBottomColor: constants.Colors.White,
    width: "75%",
    alignSelf: "flex-end",
    marginBottom: moderateScale(8)
  }
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(Notification);
