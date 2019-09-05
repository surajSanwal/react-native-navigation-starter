import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FloatingInput from "../../components/common/FloatingInput";
import ArrowButton from "../../components/common/ArrowButton";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import { push, registerUser, showToast } from "../../actions";
import Regex from "../../helpers/Regex";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
  }

  showToast = message => {
    let { showToast } = this.props;
    showToast(message, constants.Colors.Red);
  };

  onSignUpPress = () => {
    let { name, email, password } = this.state;
    let { role } = this.props;
    if (!name.length) {
      return this.showToast("Please Enter Name");
    }
    if (!email.length) {
      return this.showToast("Please Enter Email");
    }
    if (!Regex.validateEmail(email)) {
      return this.showToast("Please Enter Valid Email");
    }
    if (!password.length) {
      return this.showToast("Please Enter Password");
    }
    if (!Regex.validatePassword(password)) {
      return this.showToast(
        "Password must be between 8-15 characters and having minimum 1 special character, 1 upper case latter , 1 lower case latter and 1 numeric value!"
      );
    }
    this.props.registerUser(
      {
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[this.state.name.split(" ").length - 1] || "",
        email,
        password,
        role,
        type: 1
      },
      this.props.componentId
    );
  };

  focusNext(next) {
    this[next].focus();
  }

  render() {
    let { email, password, name } = this.state;
    let { loader } = this.props;
    return (
      <SafeView title="" componentId={this.props.componentId}>
        <KeyboardAwareScrollView
          enableAutomaticScroll
          enableOnAndroid
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={styles.container}>
            <ArrowButton
              name={"Login"}
              image={constants.Images.ArrowRightWhite}
              onPress={() =>
                this.props.push(this.props.componentId, "Login", {
                  role: this.props.role
                })
              }
              buttonReverse
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
            />
            <View style={styles.signupButtonWrapper}>
              <Text style={styles.signupButtonText}>Sign up now</Text>
            </View>
            <View style={{ flex: 0.6 }}>
              <FloatingInput
                label={"Name"}
                value={name}
                onChangeText={name => this.setState({ name })}
                autoCapitalize={"words"}
                ref={ref => (this.name = ref)}
                onSubmitEditing={() => {
                  this.focusNext("email");
                }}
              />
              <FloatingInput
                label={"Email"}
                value={email}
                onChangeText={email => this.setState({ email })}
                ref={ref => (this.email = ref)}
                onSubmitEditing={() => {
                  this.focusNext("password");
                }}
              />
              <FloatingInput
                label={"Password"}
                value={password}
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
                ref={ref => (this.password = ref)}
                onSubmitEditing={this.onSignUpPress}
              />
            </View>

            <ArrowButton
              name={"Submit"}
              image={constants.Images.ArrowRightWhite}
              onPress={this.onSignUpPress}
              loading={loader.signup}
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: constants.BaseStyle.DEVICE_HEIGHT,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: moderateScale(70)
  },
  buttonStyle: {
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1
  },
  textStyle: {
    color: constants.Colors.Turquoise,
    fontSize: moderateScale(30)
  },
  signupButtonWrapper: {
    borderBottomColor: constants.Colors.Turquoise,
    paddingVertical: moderateScale(5)
  },
  signupButtonText: {
    color: constants.Colors.White,
    fontSize: moderateScale(30)
  }
});
const mapStateToProps = state => ({
  auth: state.auth,
  loader: state.loader
});

export default connect(
  mapStateToProps,
  { push, registerUser, showToast }
)(Signup);
