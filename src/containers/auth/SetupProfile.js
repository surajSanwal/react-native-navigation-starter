import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import ArrowButton from "../../components/common/ArrowButton";
import { push } from "../../actions";
class SetupProfile extends Component {
  render() {
    return (
      <SafeView
        componentId={this.props.componentId}
        title={"Home"}
        hideBack
        drawerEnabled
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: moderateScale(10)
          }}
        >
          <View>
            <View
              style={{
                width: "70%",
                alignSelf: "center"
              }}
            >
              <Text
                style={{
                  ...constants.Fonts.ITCAvantGardeStdBkObl,
                  fontSize: moderateScale(32),
                  color: constants.Colors.Turquoise,
                  paddingVertical: moderateScale(10)
                }}
              >
                Set up Your Profile
              </Text>
              <Text
                style={{
                  ...constants.Fonts.ITCAvantGardeStdBk,
                  fontSize: moderateScale(15),
                  color: constants.Colors.White,
                  paddingVertical: moderateScale(10)
                }}
              >
                It’s a really simple 4 step process. The more detail you add the
                easier it will be for people to find you
              </Text>
              <View>
                <Text
                  style={{
                    ...constants.Fonts.ITCAvantGardeStdBk,
                    fontSize: moderateScale(15),
                    color: constants.Colors.White,
                    paddingVertical: moderateScale(10)
                  }}
                >
                  1. Business details
                </Text>
                <Text
                  style={{
                    ...constants.Fonts.ITCAvantGardeStdBk,
                    fontSize: moderateScale(15),
                    color: constants.Colors.White,
                    paddingVertical: moderateScale(10)
                  }}
                >
                  2. Payment details{" "}
                </Text>
                <Text
                  style={{
                    ...constants.Fonts.ITCAvantGardeStdBk,
                    fontSize: moderateScale(15),
                    color: constants.Colors.White,
                    paddingVertical: moderateScale(10)
                  }}
                >
                  3. Equipment
                </Text>
                <Text
                  style={{
                    ...constants.Fonts.ITCAvantGardeStdBk,
                    fontSize: moderateScale(15),
                    color: constants.Colors.White,
                    paddingVertical: moderateScale(10)
                  }}
                >
                  4. References
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ justifyContent: "space-around", alignItems: "center" }}
          >
            <ArrowButton
              name={"Let's Start"}
              image={constants.Images.ArrowRightWhite}
              buttonReverse
              buttonStyle={styles.buttonStyle}
              onPress={() =>
                this.props.push(this.props.componentId, "ShowText", {
                  profileCompleteMsg: "Weldone on completing your profile",
                  message: "Content Still To Come"
                })
              }
            />
          </View>
        </View>
      </SafeView>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "space-between",
    width: "90%",
    borderBottomColor: constants.Colors.White
    // borderBottomWidth: 1
  }
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { push }
)(SetupProfile);
