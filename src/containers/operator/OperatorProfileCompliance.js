import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import ArrowButton from "../../components/common/ArrowButton";

class OperatorProfileCompliance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      references: [
        { id: 0, name: "Add insurance" },
        { id: 0, name: "Add a certification" },
        { id: 0, name: "Licences" },
        { id: 0, name: "Experience" }
      ]
    };
  }
  render() {
    return (
      <SafeView
        hideBack
        componentId={this.props.componentId}
        title={"Home"}
        drawerEnabled
      >
        <View style={styles.container}>
          <View style={styles.bottomLineStyle}>
            <Text style={styles.title}>References</Text>
          </View>
          <FlatList
            data={this.state.references}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.bottomLineStyle,
                  {
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingVertical: moderateScale(10)
                  }
                ]}
              >
                <Text
                  style={{
                    color: constants.Colors.Turquoise,
                    ...constants.Fonts.ITCAvantGardeStdBk
                  }}
                >
                  {item.name}
                </Text>
                <Icon
                  name={"plus"}
                  size={12}
                  color="white"
                  style={{
                    alignSelf: "flex-end",
                    paddingRight: moderateScale(15)
                  }}
                />
              </View>
            )}
          />
          <View>
            <ArrowButton
              name={"next"}
              image={constants.Images.ArrowRightGreen}
              buttonStyle={styles.buttonStyle}
              buttonReverse
              style={styles.buttonImage}
              textStyle={[styles.textBelow]}
              textView={styles.textView}
              height={moderateScale(30)}
              width={moderateScale(30)}
              alignSelf="center"
            />
          </View>
        </View>
      </SafeView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "flex-end"
  },
  title: {
    fontSize: moderateScale(20),
    color: constants.Colors.Turquoise,
    ...constants.Fonts.ITCAvantGardeStdBold
  },
  bottomLineStyle: {
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1,
    marginBottom: moderateScale(10)
  },
  buttonStyle: {
    alignSelf: "center"
  },
  textBelow: {
    paddingLeft: moderateScale(0),
    ...constants.Fonts.ITCAvantGardeStdBk
  }
});

export default OperatorProfileCompliance;
