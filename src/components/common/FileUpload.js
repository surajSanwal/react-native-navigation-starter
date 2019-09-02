import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";

const FileUpload = props => {
  return (
    <View
      style={{
        borderBottomColor: constants.Colors.Turquoise,
        borderBottomWidth: 1,
        padding: moderateScale(5),
        marginVertical: moderateScale(5)
      }}
    >
      <Text style={[style.text, props.style]}>Insurance & Liability</Text>
      <View style={style.content || props.contentStyle}>
        <Icon
          name={"file-alt"}
          size={22}
          color={constants.Colors.Turquoise}
          style={style.icon || props.iconStyle}
        />
        <Text style={[style.text, { color: constants.Colors.White }]}>
          File Name: Suncorp 2019
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flexDirection: "row",
    marginVertical: moderateScale(10)
  },
  text: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(18),
    color: constants.Colors.Turquoise
  },
  icon: {
    marginRight: moderateScale(20)
  }
});
export default FileUpload;
