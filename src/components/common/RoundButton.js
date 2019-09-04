import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { moderateScale } from "../../helpers/ResponsiveFonts";
// import PropTypes from "prop-types";
import Common from "../../helpers/Common";
import constants from "../../constants";

const RoundButton = props => {
  return (
    <TouchableOpacity
      style={[style.buttonContainer, props.buttonStyle]}
      disabled={props.disabled || props.loading}
      onPress={props.onPress}
    >
      <Text style={[style.name, props.textStyle]}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    backgroundColor: constants.Colors.Transparent,
    alignItems: "center",
    marginVertical: moderateScale(5),
    borderColor: constants.Colors.White,
    borderWidth: 1,
    marginHorizontal: moderateScale(100),
    borderRadius: moderateScale(100)
  },
  name: {
    color: constants.Colors.White,
    fontSize: moderateScale(18),
    padding: moderateScale(10)
  }
});

RoundButton.defaultProps = {
  disabled: false,
  onPress: () => {
    Common.Dialog("Under Development");
  }
};
export default RoundButton;
