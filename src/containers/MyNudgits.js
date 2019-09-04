import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { push } from "../actions";
import constants from "../constants";
import { moderateScale } from "../helpers/ResponsiveFonts";
import SafeView from "../components/common/SafeView";
import ArrowButton from "../components/common/ArrowButton";

class MyNudgits extends Component {
  constructor(props) {
    super(props);
  }

  navigate(screen, role) {
    this.props.push(this.props.componentId, screen, { role });
  }

  render() {
    let { drawerEnable } = this.props;
    console.log("drawerEnable", drawerEnable);

    return (
      <View style={styles.wrapper}>
        <SafeView
          title={""}
          componentId={this.props.componentId}
          backIconColor={constants.Colors.Black}
          drawerEnabled={drawerEnable}
        >
          <View style={styles.container}>
            <View style={styles.myNudgitsWrapper}>
              <Text style={styles.text}>My Nudgits</Text>
            </View>

            <View style={styles.buttonWrapper}>
              <ArrowButton
                name={"I'm a Customer"}
                textStyle={styles.buttonFont}
                onPress={() => this.navigate("SignUp", "customer")}
                buttonReverse
                buttonStyle={styles.buttonStyle}
              />
              <ArrowButton
                name={"I'm a Operator"}
                textStyle={styles.buttonFont}
                onPress={() => this.navigate("SignUp", "operator")}
                buttonReverse
                buttonStyle={styles.buttonStyle}
              />
            </View>
          </View>
        </SafeView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: constants.Colors.Turquoise },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 99
  },
  buttonFont: {
    fontSize: moderateScale(34),
    color: constants.Colors.Black
  },
  buttonStyle: {
    borderBottomColor: constants.Colors.Black,
    borderBottomWidth: 1
  },
  buttonWrapper: {
    flex: 0.35,
    justifyContent: "space-around"
  },
  myNudgitsWrapper: {
    borderBottomColor: constants.Colors.Black,
    borderBottomWidth: 1,
    width: "80%"
  },
  text: {
    color: constants.Colors.Black,
    fontSize: moderateScale(36),
    paddingVertical: moderateScale(10)
  }
});
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { push }
)(MyNudgits);
