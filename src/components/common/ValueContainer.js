import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
const ValueContainer = props => {
  let [editable, allowEdit] = useState(false);
  return (
    <View style={style.container}>
      {props.alwaysShowPlaceHolder && props.value ? (
        <Text style={[style.placeholder, props.style]}>
          {props.placeholder}
        </Text>
      ) : null}
      <TextInput
        editable={editable}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={
          props.placeholderTextColor || constants.Colors.Turquoise
        }
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        style={[
          style.textInput,
          props.style,
          {
            width: props.alwaysShowPlaceHolder ? "80%" : "90%"
          }
        ]}
        underlineColorAndroid={constants.Colors.Transparent}
      />
      {!props.disableEdit && !editable && (
        <Icon
          onPress={() => allowEdit(true)}
          name="edit"
          size={20}
          color={constants.Colors.Turquoise}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1,
    padding: moderateScale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: moderateScale(5)
  },
  placeholder: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(18),
    color: constants.Colors.Turquoise
  },
  textInput: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(18),
    color: constants.Colors.Turquoise
  }
});

ValueContainer.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  placeholderTextColor: PropTypes.number || PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  alwaysShowPlaceHolder: PropTypes.bool
};
export default ValueContainer;
