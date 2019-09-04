import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
let pricing = [
  { id: "0", value: "Hourly Rate" },
  { id: "1", value: "Travel" },
  { id: "2", value: "Soil Removal" }
];
const Pricing = props => {
  return (
    <View style={style.container}>
      <Text style={[style.text, props.style]}>Pricing</Text>
      <FlatList
        data={pricing}
        renderItem={({ item, index }) => (
          <View key={index} style={style.content}>
            <Text style={[style.text, style.whiteColor]}>{item.value}</Text>
            <Text style={[style.text, style.whiteColor]}>$10</Text>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1,
    padding: moderateScale(5),
    marginVertical: moderateScale(5)
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(18),
    color: constants.Colors.Turquoise
  },
  whiteColor: { color: constants.Colors.White }
});
export default Pricing;
