import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import FloatingInput from "../../components/common/FloatingInput";
import ArrowButton from "../../components/common/ArrowButton";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import { userLogin } from "../../actions";
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
    return (
      <SafeView title="Login" componentId={this.props.componentId}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: moderateScale(70)
          }}
        >
          <View
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
            />
          </View>
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { userLogin }
)(Login);
