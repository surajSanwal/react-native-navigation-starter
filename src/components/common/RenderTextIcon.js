import React from "react";
import { View, Text } from "react-native";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";

const RenderTextIcon = props => {
  return (
    <View
      style={[
        [props.bottomLineStyle],
        {
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingVertical: moderateScale(10)
        }
      ]}
    >
      <Text
        style={[
          {
            color: constants.Colors.Turquoise,
            ...constants.Fonts.ITCAvantGardeStdBk,
            fontSize: moderateScale(18)
          },
          props.titleStyle
        ]}
      >
        {props.name}
      </Text>
      <Icon
        name={props.icons || "plus"}
        size={props.iconSize || 12}
        color={props.iconColor || "white"}
        style={{
          alignSelf: "flex-end",
          paddingRight: moderateScale(15)
        }}
      />
    </View>
  );
};

export default RenderTextIcon;
