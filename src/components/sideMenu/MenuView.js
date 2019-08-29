import React from "react";
import { TouchableOpacity, Text } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

const MenuView = props => (
  <TouchableOpacity
    onPress={() => props.menuPress(props)}
    style={{
      borderBottomColor: constants.Colors.Black,
      borderBottomWidth: 1,
      width: "80%"
    }}
  >
    <Text
      style={{
        color: constants.Colors.Black,
        fontSize: moderateScale(32),
        paddingVertical: moderateScale(10)
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);

export default MenuView;
