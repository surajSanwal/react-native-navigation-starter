import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import ArrowButton from "../../components/common/ArrowButton";
import RenderTextIcon from "../../components/common/RenderTextIcon";
import { push } from "../../actions";
class OperatorProfileCompliance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      references: [
        { id: 0, name: "Add insurance" },
        { id: 1, name: "Add a certification" },
        { id: 2, name: "Licences" },
        { id: 3, name: "Experience" }
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
              <RenderTextIcon
                {...item}
                bottomLineStyle={styles.bottomLineStyle}
              />
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
              onPress={() =>
                this.props.push(
                  this.props.componentId,
                  "OperatorProfileServices"
                )
              }
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

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { push }
)(OperatorProfileCompliance);
