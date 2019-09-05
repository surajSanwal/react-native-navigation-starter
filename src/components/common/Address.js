import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import Icon from "react-native-vector-icons/FontAwesome";
const Address = props => {
  let [isEditable, toggleEdit] = useState(false);
  return (
    <View style={styles.container}>
      {props.title && props.data ? (
        <View>
          <View style={styles.textWrapper}>
            <Text style={[styles.title, props.style]}>{props.title} </Text>
            <Icon
              name={"edit"}
              size={20}
              color={constants.Colors.Turquoise}
              onPress={() => toggleEdit(!isEditable)}
            />
          </View>
          <TextInput
            multiline={true}
            editable={isEditable}
            value={props.data}
            placeholderTextColor={
              props.placeholderTextColor || constants.Colors.Turquoise
            }
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            style={[styles.content, props.style]}
            underlineColorAndroid={constants.Colors.Transparent}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1,
    padding: moderateScale(5),
    marginVertical: moderateScale(5)
    // flex: 1,
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(18),
    color: constants.Colors.Turquoise
  },
  content: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(18),
    color: constants.Colors.White,
    flexWrap: "wrap"
  }
});
export default Address;
