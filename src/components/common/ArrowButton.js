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
          // padding: moderateScale(0),
          backgroundColor: constants.Colors.Transparent,
          flexDirection: props.buttonReverse ? "row-reverse" : "row",
          alignItems: "center",
          marginVertical: moderateScale(5),
          paddingVertical: moderateScale(10)

          // justifyContent: "space-between"
        },
        props.buttonStyle
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
    >
      <Image
        style={{
          height: moderateScale(props.height || 60),
          width: moderateScale(props.width || 60)
        }}
        source={props.image}
        resizeMode={"contain"}
        resizeMethod={"resize"}
      />
      {/* <View style={[{ flex: 1, justifyContent: 'center' },
      props.bottomBorder ? { borderBottomColor: constants.Colors.White, borderBottomWidth: 1 } : null]}> */}
      <Text
        style={[
          {
            color: constants.Colors.Turquoise,
            fontSize: moderateScale(18),
            padding: moderateScale(20)
          },
          props.textStyle
        ]}
      >
        {props.name}
      </Text>
      {/* </View> */}
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
