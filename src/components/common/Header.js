import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

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
        <Icon
          onPress={() => Navigation.pop(props.componentId)}
          name={"angle-left"}
          size={35}
          color={props.backIconColor || constants.Colors.White}
        />
      )}
      {!props.drawerEnabled ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
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
      ) : null}

      {props.drawerEnabled && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1
          }}
        >
          <View
            style={{
              width: "80%",
              height: moderateScale(80),
              justifyContent: "center"
            }}
          >
            <Image source={constants.Images.Nugit} resizeMode="cover" />
          </View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
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
            <View
              style={{
                backgroundColor: constants.Colors.White,
                justifyContent: "center",
                alignItems: "center",
                height: moderateScale(40),
                width: moderateScale(40)
              }}
            >
              <Icon name={"bars"} size={35} color={constants.Colors.Black} />
            </View>
          </TouchableOpacity>
        </View>
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
