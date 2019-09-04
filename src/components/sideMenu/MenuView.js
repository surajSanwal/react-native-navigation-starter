import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

const MenuView = props => (
  <TouchableOpacity
    onPress={() => props.menuPress(props)}
    style={style.buttonContainer}
  >
    <Text style={style.title}>{props.title}</Text>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  buttonContainer: {
    borderBottomColor: constants.Colors.Black,
    borderBottomWidth: 1,
    width: "80%"
  },
  title: {
    color: constants.Colors.Black,
    fontSize: moderateScale(32),
    paddingVertical: moderateScale(10)
  }
});
export default MenuView;
