import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import MenuView from "./MenuView";
import { mergeOptions, setScreenStack } from "../../actions";
import Common from "../../helpers/Common";
//terms:http://3.18.168.191:3002/terms-conditions
// privacy:http://3.18.168.191:3002/privacy-policy
const menu = [
  {
    title: "Find",
    webView: false
  },
  {
    title: "My Nudgits",
    webView: false
  },
  {
    title: "About nudgit",
    webView: true,
    url: "privacy-policy"
  },
  {
    title: "Contacts",
    webView: true,
    url: "terms-conditions"
  }
];

class AuthMenu extends Component {
  constructor(props) {
    super(props);
  }

  menuPress = menu => {
    if (menu.title === "Logout") {
      this.props.logout();
    } else if (menu.title === "Find") {
      this.props.mergeOptions(this.props.componentId, false);
      this.props.setScreenStack("AUTH_STACK", "Find", { drawerEnable: true });
    } else if (menu.title === "My Nudgits") {
      this.props.mergeOptions(this.props.componentId, false);
      this.props.setScreenStack("AUTH_STACK", "MyNudgits", {
        drawerEnable: true
      });
    } else if (menu.webView) {
      this.props.mergeOptions(this.props.componentId, false);
      this.props.setScreenStack("AUTH_STACK", "WebView", menu);
    } else {
      Common.Dialog("Under Development");
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: constants.Colors.Turquoise,
          paddingHorizontal: moderateScale(10)
        }}
      >
        <SafeAreaView>
          {menu.map((item, index) => (
            <MenuView {...item} key={index} menuPress={this.menuPress} />
          ))}
        </SafeAreaView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { mergeOptions, setScreenStack }
)(AuthMenu);
