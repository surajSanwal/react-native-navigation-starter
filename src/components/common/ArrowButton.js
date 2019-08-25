import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";

const ArrowButton = props => {
  return (
    <TouchableOpacity
      style={[
        {
          padding: moderateScale(15),
          backgroundColor: constants.Colors.Transparent,
          flexDirection: props.buttonReverse ? "row-reverse" : "row",
          alignItems: "center"
        },
        props.buttonStyle
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
    >
      <Image source={props.image} />
      <Text
        style={[
          {
            color: constants.Colors.Turquoise,
            fontSize: moderateScale(18),
            paddingHorizontal: moderateScale(5)
          },
          props.textStyle
        ]}
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

ArrowButton.defaultProps = {
  disabled: false,
  onPress: () => {},
  name: "",
  textStyle: {},
  image: constants.Images.ArrowRightDark,
  buttonReverse: false,
  buttonStyle: {}
};

ArrowButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  name: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
  image: PropTypes.number || PropTypes.string,
  buttonReverse: PropTypes.bool,
  buttonStyle: PropTypes.object
};

export default ArrowButton;
