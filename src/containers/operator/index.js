import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import ValueContainer from "../../components/common/ValueContainer";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import StarRating from "../../components/rating/StarRating.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import ArrowButton from "../../components/common/ArrowButton";

import { push } from "../../actions";

class OperatorDashboard extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount ()
  render() {
    let {
      user: { firstName, lastName }
    } = this.props;
    return (
      <SafeView
        hideBack
        componentId={this.props.componentId}
        title={"Home"}
        drawerEnabled
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              padding: moderateScale(20),
              backgroundColor: "#363636",
              marginBottom: moderateScale(50)
            }}
          >
            <View style={{ marginRight: moderateScale(15) }}>
              <Image
                source={constants.Images.BuilderImage}
                style={styles.Image}
              />
            </View>
            <View style={{ width: "75%" }}>
              <ValueContainer
                editable={false}
                disableEdit
                placeholder={"Name"}
                value={firstName + " " + lastName}
                containerStyle={styles.Container}
                style={[styles.Text, constants.Fonts.ITCAvantGardeStdBold]}
              />
              <StarRating
                starSize={10}
                size={20}
                showRating={false}
                style={{ paddingTop: 2 }}
              />
              <Icon
                name={"edit"}
                size={18}
                color="white"
                style={{ alignSelf: "flex-end" }}
              />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <ArrowButton
              name={"Jobs"}
              image={constants.Images.ArrowRightGreen}
              buttonStyle={styles.buttonStyle}
              style={styles.buttonImage}
              textStyle={[
                styles.textBelow,
                constants.Fonts.ITCAvantGardeStdBold
              ]}
              textView={styles.textView}
              onPress={() => this.props.push(this.props.componentId, "Jobs")}
            />
            <View style={styles.horizontalView}></View>
            <ArrowButton
              name={"Notifications"}
              image={constants.Images.ArrowRightGreen}
              style={styles.buttonImage}
              buttonStyle={styles.buttonStyle}
              textStyle={[
                styles.textBelow,
                constants.Fonts.ITCAvantGardeStdBold
              ]}
              textView={styles.textView}
              disabled={false}
              onPress={() =>
                this.props.push(this.props.componentId, "Notification")
              }
            />
            <View style={styles.horizontalView}></View>
            <ArrowButton
              name={"Update Profile"}
              image={constants.Images.ArrowRightGreen}
              style={styles.buttonImage}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textBelow}
              textView={styles.textView}
              disabled={false}
              onPress={() => this.props.push(this.props.componentId, "Profile")}
            />
          </View>
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const styles = StyleSheet.create({
  Container: {
    borderBottomColor: constants.Colors.Placeholder
  },
  buttonsContainer: {
    marginHorizontal: moderateScale(25)
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    // padding: moderateScale(20),
    backgroundColor: "#1C2025"
  },
  Text: {
    color: constants.Colors.White,
    fontSize: moderateScale(24)
  },
  textBelow: {
    color: constants.Colors.White,
    fontSize: moderateScale(24),
    borderBottomWidth: 1,
    ...constants.Fonts.ITCAvantGardeStdBold
  },
  Image: {
    height: moderateScale(75),
    width: moderateScale(75),
    borderRadius: 40
  },
  buttonImage: {
    height: moderateScale(65),
    width: moderateScale(65),
    marginRight: moderateScale(25)
  },
  buttonStyle: {
    marginBottom: moderateScale(10)
  },
  textView: {
    borderBottomColor: constants.Colors.White,
    borderBottomWidth: 1
    // width: "80%",
  },
  horizontalView: {
    borderWidth: 0.5,
    borderBottomColor: constants.Colors.White,
    width: "75%",
    alignSelf: "flex-end",
    marginBottom: moderateScale(8)
  }
});

export default connect(
  mapStateToProps,
  { push }
)(OperatorDashboard);
