import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../actions";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import MenuView from "./MenuView";
const menu = [
  {
    title: "Find"
  },
  { title: "My Nadgits" },
  {
    title: "About nudgit"
  },
  { title: "Contacts" },
  { title: "Logout" }
];

class CustomerMenu extends Component {
  constructor(props) {
    super(props);
  }

  menuPress = menu => {
    if (menu === "Logout") {
      this.props.logout();
      //
    } else {
      alert("underDevelopment");
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
  { logout }
)(CustomerMenu);
