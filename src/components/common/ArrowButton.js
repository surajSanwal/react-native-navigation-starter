import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";

const ArrowButton = props => {
  return (
    <TouchableOpacity
      style={{
        padding: moderateScale(15),
        backgroundColor: constants.Colors.Transparent
      }}
      disabled={props.disabled}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: constants.Colors.Turquoise,
          fontSize: moderateScale(18)
        }}
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

ArrowButton.defaultProps = {
  disabled: false,
  onPress: () => {},
  name: ""
};

ArrowButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  name: PropTypes.string.isRequired
};

export default ArrowButton;
