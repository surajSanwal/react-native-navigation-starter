import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { push } from "../actions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  navigate = () => {
    this.props.push(this.props.componentId, "Profile");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.navigate}> Home</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { push }
)(Home);
