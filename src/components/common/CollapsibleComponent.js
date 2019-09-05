import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import Collapsible from "react-native-collapsible";
import PropTypes from "prop-types";
const CollapsibleComponent = props => {
  let [isCollapsed, updateCollapsed] = useState(true);
  return (
    <View>
      <TouchableOpacity
        onPress={() => updateCollapsed(!isCollapsed)}
        style={[style.button, props.buttonStyle]}
      >
        <Text style={style.buttonTitle}>{props.title}</Text>
        <Icon
          name={
            isCollapsed
              ? props.activeIcon || "angle-right"
              : props.inActiveIcon || "angle-down"
          }
          size={props.size || 25}
          color={constants.Colors.Turquoise}
          style={style.iconStyle}
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>{props.children}</Collapsible>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    flexDirection: "row",
    marginVertical: moderateScale(5),
    alignItems: "center",
    padding: moderateScale(5),
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1
  },
  buttonTitle: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(18),
    color: constants.Colors.Turquoise
  },
  iconStyle: {
    paddingHorizontal: moderateScale(10),
    alignSelf: "flex-end"
  }
});

CollapsibleComponent.propsTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  activeIcon: PropTypes.number || PropTypes.string,
  inActiveIcon: PropTypes.number || PropTypes.string,
  size: PropTypes.number
};
export default CollapsibleComponent;
