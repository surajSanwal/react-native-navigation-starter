import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

const Header = props => {
  let [drawerOpen, updateDrawer] = useState(false); //eslint-disable-line
  return (
    <View style={style.container}>
      {!props.drawerEnabled ? (
        <Icon
          onPress={() => Navigation.pop(props.componentId)}
          name={"angle-left"}
          size={35}
          color={props.backIconColor || constants.Colors.White}
        />
      ) : null}

      {!props.drawerEnabled ? (
        <View style={style.titleWrapper}>
          <Text style={style.title}>{props.title}</Text>
        </View>
      ) : null}

      {props.drawerEnabled && (
        <View style={style.content}>
          <View style={style.imageWrapper}>
            <Image source={constants.Images.Nugit} resizeMode="cover" />
          </View>
          <TouchableOpacity
            style={style.button}
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
              style={[
                style.iconWrapper,
                {
                  backgroundColor: props.barColor
                    ? constants.Colors.Black
                    : constants.Colors.White
                }
              ]}
            >
              <Icon
                name={"bars"}
                size={35}
                color={props.barColor || constants.Colors.Black}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: moderateScale(0),
    paddingHorizontal: moderateScale(10)
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: constants.Colors.White,
    fontSize: moderateScale(20),
    fontWeight: "bold"
  },
  button: { flexDirection: "row" },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(40),
    width: moderateScale(40)
  },
  imageWrapper: {
    width: "80%",
    height: moderateScale(80),
    justifyContent: "center"
  }
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hideBack: PropTypes.bool,
  drawerEnabled: PropTypes.bool,
  barColor: PropTypes.string,
  backIconColor: PropTypes.string,
  componentId: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: "",
  hideBack: false,
  drawerEnabled: false
};
export default Header;
