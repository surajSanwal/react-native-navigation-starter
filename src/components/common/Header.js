import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import { Navigation } from "react-native-navigation";
const Header = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: moderateScale(15)
      }}
    >
      <Text
        onPress={() => Navigation.pop(props.componentId)}
        style={{ color: constants.Colors.White, fontSize: moderateScale(14) }}
      >
        Back
      </Text>
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
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: ""
};
export default Header;
