import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Header from "./Header";

const SafeView = props => (
  <SafeAreaView style={style.container}>
    <Header {...props} />
    {props.children}
  </SafeAreaView>
);
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "column"
  }
});

SafeView.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  hideBack: PropTypes.bool,
  onBackPress: PropTypes.func
};

SafeView.defaultProps = {
  children: null,
  title: "",
  hideBack: false,
  onBackPress: () => {}
};
export default SafeView;
