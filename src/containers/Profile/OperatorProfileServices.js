import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
import ArrowButton from "../../components/common/ArrowButton";
import CollapsibleComponent from "../../components/common/CollapsibleComponent";
import MachineType from "../../components/operator/MachineType";
import FormTextInput from "../../components/common/FormTextInput";
import Icon from "react-native-vector-icons/FontAwesome";

import { push } from "../../actions";

class OperatorProfileServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      references: [
        { id: 0, name: "Add a machine" },
        { id: 1, name: "Add service" }
      ],
      makeYear: "20__",
      registration: "00/00/00 ",
      rate: "$ 0000.00"
    };
  }
  render() {
    const { makeYear, registration, Rate } = this.state;
    return (
      <SafeView
        hideBack
        componentId={this.props.componentId}
        title={"Home"}
        drawerEnabled
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.bottomLineStyle}>
              <Text style={styles.title}>Services</Text>
            </View>

            <CollapsibleComponent
              title="Add a machine"
              activeIcon={"plus"}
              inActiveIcon={"close"}
              size={20}
            >
              <CollapsibleComponent title={"Machine Type"}>
                <MachineType />
              </CollapsibleComponent>
              <CollapsibleComponent title={"Attachment"}>
                {/* //FlatList */}
              </CollapsibleComponent>
              <View>
                <FormTextInput
                  title={"Make Year"}
                  placeholder={"20__"}
                  value={makeYear}
                  onChangeText={makeYear => this.setState({ makeYear })}
                  style={styles.FormTextInput}
                />
              </View>
              <View>
                <FormTextInput
                  title={"Registration"}
                  placeholder={"00/00/00"}
                  value={registration}
                  onChangeText={registration => this.setState({ registration })}
                  style={styles.FormTextInput}
                />
              </View>
              <View>
                <FormTextInput
                  title={"Rate"}
                  placeholder={"$ 0000.00"}
                  value={Rate}
                  onChangeText={Rate => this.setState({ Rate })}
                  style={styles.FormTextInput}
                />
              </View>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveBtnTxt}>Save</Text>
                <View
                  style={{
                    backgroundColor: constants.Colors.Turquoise,
                    borderRadius: moderateScale(50),
                    height: moderateScale(30),
                    width: moderateScale(30),
                    marginLeft: moderateScale(15)
                  }}
                >
                  <Icon
                    name="repeat"
                    size={20}
                    color={constants.Colors.DarkBlack}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            </CollapsibleComponent>

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
        </ScrollView>
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
    marginBottom: moderateScale(10),
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
    fontSize: moderateScale(28),
    alignContent: "center",
    textAlign: "center",
    ...constants.Fonts.ITCAvantGardeStdBk
  },
  FormTextInput: {
    paddingRight: moderateScale(20),
    ...constants.Fonts.ITCAvantGardeStdBk
  },
  saveButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: moderateScale(20),
    marginTop: moderateScale(10)
  },
  saveBtnTxt: {
    color: constants.Colors.Turquoise,
    fontSize: moderateScale(18)
  },
  icon: {
    padding: moderateScale(5),
    alignSelf: "center"
  }
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { push }
)(OperatorProfileServices);
