import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FloatingInput from "../../components/common/FloatingInput";
import ArrowButton from "../../components/common/ArrowButton";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import { userLogin, push, showToast } from "../../actions";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onLoginPress = () => {
    this.props.userLogin({
      email: this.state.username,
      password: this.state.password,
      device: {
        type: "ios",
        token: "xyxxxxzzzz"
      },
      role: this.props.role
    });
  };
  render() {
    let { username, password } = this.state;
    let { loader } = this.props;
    return (
      <SafeView title="" componentId={this.props.componentId}>
        <KeyboardAwareScrollView
          enableAutomaticScroll
          enableOnAndroid
          keyboardShouldPersistTaps={"handled"}
        >
          <View
            style={{
              height: constants.BaseStyle.DEVICE_HEIGHT * 0.8,
              flexDirection: "column",
              justifyContent: "space-around",
              marginLeft: moderateScale(70)
            }}
          >
            <View
              style={{
                borderBottomColor: constants.Colors.Turquoise,
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
                Login
              </Text>
            </View>
            <View style={{ flex: 0.3 }}>
              <FloatingInput
                label={"User Name"}
                value={username}
                onChangeText={username => this.setState({ username })}
              />
              <FloatingInput
                label={"Password"}
                value={password}
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />
              <Text
                onPress={() =>
                  this.props.push(this.props.componentId, "ForgotPassword")
                }
                style={{
                  color: constants.Colors.White,
                  ...constants.Fonts.ITCAvantGardeProBk,
                  fontSize: moderateScale(12),
                  paddingVertical: moderateScale(5)
                }}
              >
                Forgot Password ?
              </Text>
            </View>

            <View
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start"
              }}
            >
              <ArrowButton
                name={"Submit"}
                image={constants.Images.ArrowRightWhite}
                buttonReverse
                onPress={this.onLoginPress}
                loading={loader.login}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  loader: state.loader
});

export default connect(
  mapStateToProps,
  { userLogin, push, showToast }
)(Login);
