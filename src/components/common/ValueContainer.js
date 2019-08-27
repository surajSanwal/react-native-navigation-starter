import React from "react";
import { View, Text, TextInput } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

const ValueContainer = props => {
  return (
    <View
      style={[
        {
          borderBottomColor: constants.Colors.Turquoise,
          borderBottomWidth: 1,
          padding: moderateScale(5),
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center"
        },
        props.containerStyle
      ]}
    >
      {props.alwaysShowPlaceHolder && (
        <Text
          style={[
            {
              ...constants.Fonts.ITCAvantGardeProBk,
              fontSize: moderateScale(18),
              color: constants.Colors.Turquoise
            },
            props.style
          ]}
        >
          {props.placeholder}
        </Text>
      )}
      <TextInput
        editable={props.editable}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        style={[
          {
            ...constants.Fonts.ITCAvantGardeProBk,
            width: props.alwaysShowPlaceHolder ? "80%" : "100%",
            fontSize: moderateScale(18),
            color: constants.Colors.Turquoise
          },
          props.style
        ]}
        underlineColorAndroid={constants.Colors.Transparent}
      />
    </View>
  );
};

export default ValueContainer;
