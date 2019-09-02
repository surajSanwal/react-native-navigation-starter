import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import constants from "../constants";
import { moderateScale } from "../helpers/ResponsiveFonts";
import SafeView from "../components/common/SafeView";

class ShowText extends Component {
  componentDidMount() {
    console.log("PassProps", this.props);
  }
  render() {
    return (
      <SafeView
        drawerEnabled
        componentId={this.props.componentId}
        title={this.props.title}
      >
        <View
          style={[
            {
              borderBottomColor: constants.Colors.Turquoise,
              borderBottomWidth: 1,
              padding: moderateScale(5),
              marginVertical: moderateScale(35)
            },
            this.props.style
          ]}
        >
          <Text style={[style.text, this.props.style]}>
            {this.props.profileCompleteMsg}
          </Text>
        </View>
        <Text style={[style.text, this.props.style]}>{this.props.message}</Text>
      </SafeView>
    );
  }
}

const style = StyleSheet.create({
  text: {
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(28),
    color: constants.Colors.Turquoise,
    marginHorizontal: moderateScale(35),
    alignSelf: "center"
  }
});

export default ShowText;
