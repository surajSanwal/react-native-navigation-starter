import React from "react";
import { View, StyleSheet } from "react-native";
import Spinner from "react-native-spinkit";
import constants from "../../constants";

const SpinnerComponent = props => {
  if (props.fullScreen) {
    return (
      <View style={styles.container}>
        <Spinner
          style={styles.spinner}
          isVisible={true}
          size={props.size}
          type={props.type || "Circle"}
          color={props.color || constants.Colors.Turquoise}
        />
      </View>
    );
  } else {
    return (
      <Spinner
        style={styles.spinner}
        isVisible={true}
        size={props.size}
        type={props.type || "Circle"}
        color={props.color || constants.Colors.Turquoise}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: constants.Colors.Black
  },
  spinner: {}
});

export default SpinnerComponent;
