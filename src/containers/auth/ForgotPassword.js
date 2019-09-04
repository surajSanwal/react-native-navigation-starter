import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FloatingInput from "../../components/common/FloatingInput";
import ArrowButton from "../../components/common/ArrowButton";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import { forgotPassword } from "../../actions";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  onForgotPress = () => {
    this.props.forgotPassword({
      email: this.state.username,
      role: this.props.role,
      type: "mobile"
    });
  };
  render() {
    let { username } = this.state;
    let { loader } = this.props;
    return (
      <SafeView title="Forgot Password?" componentId={this.props.componentId}>
        <KeyboardAwareScrollView
          enableAutomaticScroll
          enableOnAndroid
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={style.container}>
            {/* <View
              style={{
                borderBottomColor: constants.Colors.White,
                borderBottomWidth: 1,
                flex: 0.1,
                justifyContent: "flex-end",
                paddingVertical: moderateScale(5)
              }}
            >
              <Text
                style={{
                  color: constants.Colors.Turquoise,
                  fontSize: moderateScale(30)
                }}
              >
                Forgot Password
              </Text>
            </View> */}
            {/* <View style={{ flex: 0.3 }}> */}
            <Text style={style.message}>
              Enter your email address, we&#39;ll send you reset password
              link...
            </Text>
            <FloatingInput
              label={"email"}
              value={username}
              onChangeText={username => this.setState({ username })}
            />
            {/* </View> */}

            <ArrowButton
              name={"Submit"}
              image={constants.Images.ArrowRightWhite}
              buttonReverse
              onPress={this.onForgotPress}
              loading={loader.forgot}
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: constants.BaseStyle.DEVICE_HEIGHT * 0.8,
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: moderateScale(70)
  },
  message: {
    color: constants.Colors.White,
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(20),
    paddingVertical: moderateScale(5)
  }
});
const mapStateToProps = state => ({
  auth: state.auth,
  loader: state.loader
});

export default connect(
  mapStateToProps,
  { forgotPassword }
)(ForgotPassword);
