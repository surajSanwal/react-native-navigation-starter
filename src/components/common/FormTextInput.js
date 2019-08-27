import React from "react";
import { View, Text, TextInput } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

const FormTextInput = props => {
  return (
    <View
      style={{
        borderBottomColor: constants.Colors.Turquoise,
        borderBottomWidth: 1,
        paddingVertical: moderateScale(15),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: moderateScale(5)
      }}
    >
      <Text
        style={[
          {
            ...constants.Fonts.ITCAvantGardeProBk,
            fontSize: moderateScale(18),
            color: constants.Colors.Turquoise,
            flex: 0.5
          },
          props.style
        ]}
      >
        {props.title}
      </Text>
      <TextInput
        editable={props.editable}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={
          props.placeholderTextColor || constants.Colors.Turquoise
        }
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        style={[
          {
            ...constants.Fonts.ITCAvantGardeProBk,
            fontSize: moderateScale(18),
            color: constants.Colors.Turquoise,
            flex: 0.5,
            textAlign: "right"
          },
          props.style
        ]}
        underlineColorAndroid={constants.Colors.Transparent}
      />
    </View>
  );
};

export default FormTextInput;
