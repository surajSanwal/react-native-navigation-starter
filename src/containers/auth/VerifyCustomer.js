import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import { resendVerification } from "../../actions";

class VerifyCustomer extends Component {
  constructor(props) {
    super(props);
  }

  onPressResend = () => {
    this.props.resendVerification({ email: this.props.user.email });
  };

  render() {
    return (
      <SafeView title={"Verify Account"} componentId={this.props.componentId}>
        <View
          style={{
            flex: 1,
            padding: moderateScale(75),
            justifyContent: "space-around"
          }}
        >
          <View style={{ flex: 0.4, justifyContent: "space-between" }}>
            <View>
              <Text
                style={{
                  ...constants.Fonts.ITCAvantGardeStdBk,
                  fontSize: moderateScale(32),
                  color: constants.Colors.White
                }}
              >
                Verify
              </Text>
              <Text
                style={{
                  ...constants.Fonts.ITCAvantGardeStdDemiCnObl,
                  fontSize: moderateScale(15),
                  color: constants.Colors.White
                }}
              >
                We&apos;ve sent you an email to:
              </Text>
              <Text
                style={{
                  ...constants.Fonts.ITCAvantGardeStdDemiCnObl,
                  fontSize: moderateScale(15),
                  color: constants.Colors.Turquoise
                }}
              >
                {this.props.user.email}
              </Text>
            </View>

            <Text
              style={{
                ...constants.Fonts.ITCAvantGardeStdDemi,
                fontSize: moderateScale(15),
                color: constants.Colors.White
              }}
            >
              Please press on the link provided in your email from us to verify
              your account.
            </Text>
          </View>
          <View
            style={{
              flex: 0.1,
              borderBottomColor: constants.Colors.Turquoise
              // borderBottomWidth: 1
            }}
          >
            <Text
              style={{
                ...constants.Fonts.ITCAvantGardeProBk,
                fontSize: moderateScale(18),
                color: constants.Colors.Turquoise
              }}
            >
              didn&apos;t get the email?
            </Text>
            <Text
              style={{
                ...constants.Fonts.ITCAvantGardeProBk,
                fontSize: moderateScale(18),
                color: constants.Colors.Turquoise,
                textDecorationLine: "underline"
              }}
            >
              Send it agin &gt;
            </Text>
          </View>
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { resendVerification }
)(VerifyCustomer);
