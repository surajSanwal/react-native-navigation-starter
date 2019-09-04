import React from "react";
import { View, Text, StyleSheet } from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import Icon from "react-native-vector-icons/FontAwesome5";

const JobsContainer = props => {
  return (
    <View>
      <View style={style.titleContainer}>
        <Text style={style.title}>{props.day} | </Text>
        <Text style={[style.title, style.date]}>{props.date}</Text>
      </View>
      <View style={style.contentBox}>
        <Text style={style.contentTitle}>{props.contentTitle}</Text>
        <View style={style.contentBoxData}>
          <Icon
            name={"tachometer-alt"}
            size={25}
            color="black"
            style={style.icon}
          />
          <Text style={[style.contentTitle, style.contentBoxText]}>
            7:30 AM
          </Text>
        </View>
        <View style={style.horizontalLine}></View>
        <View style={style.contentBoxData}>
          <Icon
            name={"map-marker-alt"}
            size={25}
            color="black"
            style={style.icon}
          />
          <Text style={[style.contentTitle, style.contentBoxText]}>
            11 Riesling St, Thornsland Q 4164
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    borderBottomColor: constants.Colors.White,
    borderBottomWidth: 1,
    paddingBottom: moderateScale(20),
    marginVertical: moderateScale(35),
    marginHorizontal: moderateScale(30)
  },
  date: { fontSize: moderateScale(20) },
  contentBox: {
    backgroundColor: constants.Colors.Turquoise,
    paddingVertical: moderateScale(10),
    marginHorizontal: moderateScale(30)
  },
  title: {
    color: constants.Colors.White,
    fontSize: moderateScale(24),
    alignSelf: "center"
  },
  icon: {
    width: "10%",
    textAlign: "center"
  },
  contentTitle: {
    color: constants.Colors.Black,
    padding: moderateScale(15),
    fontSize: moderateScale(18),
    ...constants.Fonts.ITCAvantGardeProBk
  },
  contentBoxData: {
    flexDirection: "row",
    marginLeft: moderateScale(30),
    paddingVertical: moderateScale(5),
    width: "100%"
  },
  contentBoxText: {
    padding: 0,
    paddingHorizontal: moderateScale(20),
    flexWrap: "wrap",
    width: "80%"
  },
  horizontalLine: {
    borderBottomColor: constants.Colors.Gray,
    borderBottomWidth: 2,
    marginVertical: moderateScale(10)
  }
});
export default JobsContainer;
