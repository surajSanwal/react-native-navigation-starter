import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

const WeekView = props => {
  console.log("props in weekview", props);

  return (
    <FlatList
      scrollEnabled={false}
      horizontal
      key={Math.random()}
      data={Days}
      contentContainerStyle={{
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(10),
        marginVertical: moderateScale(15),
        flex: 1
      }}
      renderItem={({ item, index }) => (
        <View key={index}>
          <Text
            style={{
              color: constants.Colors.White,
              ...constants.Fonts.ITCAvantGardeProBk,
              fontSize: moderateScale(15)
            }}
          >
            {item.charAt(0)}
          </Text>
          <TouchableOpacity
            key={index}
            onPress={() => props.onDayPress(item)}
            style={{
              height: moderateScale(10),
              width: moderateScale(10),
              backgroundColor:
                props.days && props.days.includes(item)
                  ? constants.Colors.Turquoise
                  : constants.Colors.White,
              borderRadius: moderateScale(100)
            }}
          />
        </View>
      )}
    />
  );
};
export const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

WeekView.propTypes = {
  onDayPress: PropTypes.func,
  days: PropTypes.array
};
WeekView.Days = {
  Sunday: "Sunday",
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday"
};
export default WeekView;
