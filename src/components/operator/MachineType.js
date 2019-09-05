import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

const MachineTypes = [
  { id: 0, name: "1-2 Tonne Combo" },
  { id: 1, name: "1-2 Tonne Posi Combo" },
  { id: 2, name: "3-4 Tonne Combo" },
  { id: 3, name: "3-4 Tonne Posi Combo" },
  { id: 4, name: "5-6 Tonne Combo" },
  { id: 5, name: "5-6 Tonne Posi Combo" },
  { id: 6, name: "7-8 Tonne Escavator" },
  { id: 7, name: "7-8 Tonne Combo" },
  { id: 8, name: "13 Tonne Escavator" },
  { id: 9, name: "20 Tonne Escavator" },
  { id: 10, name: "25 Tonne Escavator" },
  { id: 11, name: "30 Tonne Escavator" },
  { id: 12, name: "1600mm wide Positrack" }
];

const MachineType = () => {
  return (
    <View>
      <FlatList
        data={MachineTypes}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: constants.Colors.Greyish
  },
  text: {
    color: constants.Colors.Turquoise,
    fontSize: moderateScale(18)
  }
});
export default MachineType;
