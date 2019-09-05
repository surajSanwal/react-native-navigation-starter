/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/components/common/ArrowButton.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Thursday, August 29th 2019, 5:48:13 pm
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */

import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import Common from "../../helpers/Common";
import SpinnerComponent from "./Spinner";

const ArrowButton = props => {
  return (
    <TouchableOpacity
      style={[
        style.container,
        props.buttonStyle,
        {
          flexDirection: props.buttonReverse ? "row-reverse" : "row",
          justifyContent: !props.buttonReverse ? "flex-start" : "flex-end"
        }
      ]}
      disabled={props.disabled || props.loading}
      onPress={props.onPress}
    >
      {props.loading ? (
        <SpinnerComponent />
      ) : (
        <Image
          style={{
            height: moderateScale(props.height || 60),
            width: moderateScale(props.width || 60)
          }}
          source={props.image}
          resizeMode={"contain"}
          resizeMethod={"resize"}
        />
      )}
      <Text style={[style.buttonText, props.textStyle]}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: constants.Colors.Transparent,
    alignItems: "center",
    marginVertical: moderateScale(5),
    paddingVertical: moderateScale(10)
  },
  buttonText: {
    color: constants.Colors.Turquoise,
    fontSize: moderateScale(18),
    padding: moderateScale(20)
  }
});

ArrowButton.defaultProps = {
  disabled: false,
  onPress: () => {
    Common.Dialog("Under Development");
  },
  name: "",
  textStyle: {},
  image: constants.Images.ArrowRightDark,
  buttonReverse: false,
  buttonStyle: {},
  loading: false
};

ArrowButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  name: PropTypes.string.isRequired,
  textStyle: PropTypes.object,
  image: PropTypes.number || PropTypes.string,
  buttonReverse: PropTypes.bool,
  buttonStyle: PropTypes.object,
  loading: PropTypes.bool
};

export default ArrowButton;
