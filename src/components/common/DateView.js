import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import moment from "moment";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import PropTypes from "prop-types";

const DateView = props => {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>{props.title}</Text>
      <TouchableOpacity style={Style.buttonView} onPress={props.onPress}>
        <Text style={Style.value}>
          {props.time ? moment(props.time).format("hh:mm A") : "Select Time"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: moderateScale(10)
  },
  buttonView: {
    flex: 0.7,
    marginHorizontal: moderateScale(20)
  },
  title: {
    flex: 0.3,
    color: constants.Colors.White,
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(16)
  },
  value: {
    color: constants.Colors.Turquoise,
    ...constants.Fonts.ITCAvantGardeProMd,
    fontSize: moderateScale(15)
  }
});
DateView.propsTypes = {
  title: PropTypes.string,
  time: PropTypes.string || PropTypes.number
};
export default DateView;
