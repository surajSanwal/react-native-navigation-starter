import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

const menu = [
  {
    title: "Find"
  },
  { title: "My Nadgits" },
  {
    title: "About nudgit"
  },
  { title: "Contacts" }
];

const MenuView = props => (
  <View
    style={{
      borderBottomColor: constants.Colors.Black,
      borderBottomWidth: 1,
      width: "80%"
    }}
  >
    <Text
      style={{
        color: constants.Colors.Black,
        fontSize: moderateScale(32),
        paddingVertical: moderateScale(10)
      }}
    >
      {props.title}
    </Text>
  </View>
);
const Auth = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: constants.Colors.Turquoise,
        paddingHorizontal: moderateScale(10)
      }}
    >
      <SafeAreaView>
        {menu.map((item, index) => (
          <MenuView {...item} key={index} />
        ))}
      </SafeAreaView>
    </View>
  );
};

export default Auth;
