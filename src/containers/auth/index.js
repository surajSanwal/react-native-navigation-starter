import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import FloatingInput from "../../components/common/FloatingInput";
import ArrowButton from "../../components/common/ArrowButton";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
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
          </View>

          <ArrowButton name={"Sign In"} />
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
  {}
)(Login);
