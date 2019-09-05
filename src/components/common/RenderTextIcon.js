import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";

const RenderTextIcon = props => {
  return (
    <View style={[props.bottomLineStyle, style.container]}>
      <Text style={[style.name, props.titleStyle]}>{props.name}</Text>
      <Icon
        name={props.icons || "plus"}
        size={props.iconSize || 12}
        color={props.iconColor || "white"}
        style={style.icon}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: moderateScale(10)
  },
  name: {
    color: constants.Colors.Turquoise,
    ...constants.Fonts.ITCAvantGardeStdBk,
    fontSize: moderateScale(18)
  },
  icon: {
    alignSelf: "flex-end",
    paddingRight: moderateScale(15)
  }
});

export default RenderTextIcon;
