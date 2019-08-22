import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import FloatingInput from "../../components/common/FloatingInput";
import ArrowButton from "../../components/common/ArrowButton";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import { push } from "../../actions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
  }
  render() {
    let { email, password, name } = this.state;
    return (
      <SafeView title="Sign Up" componentId={this.props.componentId}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: moderateScale(70)
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.push(this.props.componentId, "Login")}
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
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: constants.Colors.Turquoise,
              flex: 0.1,
              justifyContent: "flex-end",
              paddingVertical: moderateScale(5)
            }}
          >
            <Text
              style={{
                color: constants.Colors.White,
                fontSize: moderateScale(30)
              }}
            >
              Sign up now
            </Text>
          </View>
          <View style={{ flex: 0.4 }}>
            <FloatingInput
              label={"Name"}
              value={name}
              onChangeText={name => this.setState({ name })}
            />
            <FloatingInput
              label={"Email"}
              value={email}
              onChangeText={email => this.setState({ email })}
            />
            <FloatingInput
              label={"Password"}
              value={password}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <ArrowButton
            name={"Submit"}
            image={constants.Images.ArrowRightWhite}
          />
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
  { push }
)(Signup);
