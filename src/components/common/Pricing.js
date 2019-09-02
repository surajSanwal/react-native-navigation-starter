import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
let pricing = [
  { id: 0, value: "Hourly Rate" },
  { id: 0, value: "Travel" },
  { id: 0, value: "Soil Removal" }
];
const Pricing = props => {
  return (
    <View
      style={{
        borderBottomColor: constants.Colors.Turquoise,
        borderBottomWidth: 1,
        padding: moderateScale(5),
        marginVertical: moderateScale(5)
      }}
    >
      <Text style={[style.text, props.style]}>Pricing</Text>
      <FlatList
        data={pricing}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={[style.text, { color: constants.Colors.White }]}>
              {item.value}
            </Text>
            <Text style={[style.text, { color: constants.Colors.White }]}>
              $10
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(18),
    color: constants.Colors.Turquoise
  }
});
export default Pricing;
