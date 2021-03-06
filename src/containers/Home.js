import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { push } from "../actions";
import constants from "../constants";
import { moderateScale } from "../helpers/ResponsiveFonts";
import SafeView from "../components/common/SafeView";
import ArrowButton from "../components/common/ArrowButton";
import Socket from "../helpers/Socket";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Socket.init();
  }

  navigate = screen => {
    this.props.push(this.props.componentId, screen);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={constants.Images.Bulldozer}
          style={styles.imageBackground}
          resizeMode={"cover"}
          resizeMethod={"auto"}
        />
        <SafeView
          title={""}
          hideBack
          drawerEnabled
          componentId={this.props.componentId}
        >
          <View style={styles.container}>
            <Text style={styles.nudgeMessage}>
              a simple nudge can move mountains
            </Text>
            <View>
              <ArrowButton
                name={"Find"}
                textStyle={styles.buttonFont}
                onPress={() => this.navigate("FileSystem")}
                image={constants.Images.ArrowRightWhite}
              />
              <ArrowButton
                name={"My Nudgits"}
                textStyle={styles.buttonFont}
                onPress={() => this.navigate("MyNudgits")}
                image={constants.Images.ArrowRightWhite}
              />
            </View>
          </View>
        </SafeView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 99
  },
  buttonFont: {
    fontSize: moderateScale(34)
  },
  imageBackground: {
    position: "absolute",
    height: constants.BaseStyle.DEVICE_HEIGHT,
    width: constants.BaseStyle.DEVICE_WIDTH,
    justifyContent: "center"
  },
  nudgeMessage: {
    color: "#fff",
    fontSize: moderateScale(30),
    fontWeight: "bold",
    paddingLeft: moderateScale(50),
    paddingRight: moderateScale(150)
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
)(Home);
