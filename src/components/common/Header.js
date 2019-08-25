import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import { Navigation } from "react-native-navigation";
const Header = props => {
  let [drawerOpen, updateDrawer] = useState(false); //eslint-disable-line
  return (
    <View
      style={{
        flexDirection: "row",
        padding: moderateScale(15)
      }}
    >
      {!props.hideBack && (
        <Text
          onPress={() => Navigation.pop(props.componentId)}
          style={[
            { color: constants.Colors.White, fontSize: moderateScale(14) },
            props.backStyle
          ]}
        >
          Back
        </Text>
      )}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: constants.Colors.White,
            fontSize: moderateScale(20),
            fontWeight: "bold"
          }}
        >
          {props.title}
        </Text>
      </View>
      {props.drawerEnabled && (
        <TouchableOpacity
          style={{}}
          onPress={() => {
            Navigation.mergeOptions(props.componentId, {
              sideMenu: {
                right: {
                  visible: !drawerOpen
                }
              }
            });
            // updateDrawer(!drawerOpen);
          }}
        >
          <Image source={constants.Images.Drawer} />
        </TouchableOpacity>
      )}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hideBack: PropTypes.bool,
  drawerEnabled: PropTypes.bool
};

Header.defaultProps = {
  title: "",
  hideBack: false,
  drawerEnabled: false
};
export default Header;
