/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/containers/Find.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Wednesday, August 21st 2019, 6:56:20 pm
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import SafeView from "../components/common/SafeView";
import { push, getServiceType, getMachines } from "../actions";
import constants from "../constants";
// import { moderateScale } from "../helpers/ResponsiveFonts";
import DropdownView from "../components/common/DropdownView";
// import FloatingInput from "../components/common/FloatingInput";
import ArrowButton from "../components/common/ArrowButton";
import { moderateScale } from "../helpers/ResponsiveFonts";
import { Calendar } from "react-native-calendars";
import { ModalCenterView } from "../components/common/ModalView";
class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  componentDidMount() {
    this.props.getMachines();
    this.props.getServiceType();
  }

  navigate = screen => {
    this.props.push(this.props.componentId, screen);
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    let {
      machine: { machineList },
      service: { serviceList },
      drawerEnable
    } = this.props;
    let { modalVisible } = this.state;
    return (
      <SafeView
        title={"Find"}
        componentId={this.props.componentId}
        drawerEnabled={drawerEnable}
      >
        <View style={{ flex: 1, padding: moderateScale(70) }}>
          <Text
            style={{
              color: constants.Colors.White,
              ...constants.Fonts.ITCAvantGardeProBk,
              fontSize: moderateScale(32)
            }}
          >
            What are you looking for?
          </Text>
          <View style={{ flex: 1 }}>
            <DropdownView data={serviceList} label={"Service Type"} />
            <DropdownView data={machineList} label={"Machine Type"} />
            <View
              style={{
                borderBottomColor: constants.Colors.Turquoise,
                borderBottomWidth: 1,
                paddingTop: moderateScale(5)
              }}
            >
              <Text
                style={{
                  color: constants.Colors.Turquoise,
                  paddingVertical: moderateScale(5),
                  borderBottomColor: constants.Colors.Turquoise,
                  borderBottomWidth: 1,
                  fontSize: moderateScale(15)
                }}
                onPress={this.toggleModal}
              >
                When
              </Text>
            </View>
            <GooglePlacesAutocomplete
              placeholder="Search"
              placeholderTextColor={constants.Colors.Turquoise}
              minLength={2}
              autoFocus={false}
              returnKeyType={"search"}
              keyboardAppearance={"light"}
              listViewDisplayed={false} // true/false/undefined
              fetchDetails={true} //eslint-disable-next-line
              onPress={data => {
                // 'details' is provided when fetchDetails = true
                // console.log("data iiiii===>", data, details);
              }}
              query={{
                key: constants.DevKeys.GooglePlaceAPIKey,
                language: "en" // language of the results
                // types: "(cities)" // default: 'geocode'
              }}
              styles={{
                container: {
                  flex: 0.5,
                  backgroundColor: constants.Colors.Black,
                  borderWidth: 0,
                  paddingTop: 10
                },
                description: {
                  color: constants.Colors.Turquoise
                },
                textInputContainer: {
                  backgroundColor: constants.Colors.Black,
                  borderBottomColor: constants.Colors.Turquoise,
                  borderBottomWidth: 1,
                  borderTopWidth: 0
                },
                textInput: {
                  backgroundColor: constants.Colors.Black,
                  color: constants.Colors.Turquoise,
                  marginLeft: 0,
                  marginRight: 0
                },
                loader: {},
                listView: {},
                poweredContainer: {
                  backgroundColor: constants.Colors.Black,
                  display: "none"
                },
                separator: {},
                row: {
                  backgroundColor: constants.Colors.Black
                },
                predefinedPlacesDescription: {
                  color: constants.Colors.MedBlue
                }
              }}
              currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="Current location"
              nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
            <ArrowButton
              image={constants.Images.ArrowRightWhite}
              name={"Find"}
            />
          </View>
        </View>
        <ModalCenterView visible={modalVisible} onCloseModal={this.toggleModal}>
          <Calendar
            // Collection of dates that have to be colored in a special way. Default = {}
            markedDates={{
              "2019-05-20": { textColor: "green" },
              "2019-05-22": { startingDay: true, color: "green" },
              "2019-05-23": {
                selected: true,
                endingDay: true,
                color: "green",
                textColor: "gray"
              },
              "2019-05-04": {
                disabled: true,
                startingDay: true,
                color: "green",
                endingDay: true
              }
            }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={"period"}
          />
        </ModalCenterView>
      </SafeView>
    );
  }
}

const mapStateToProps = state => ({
  machine: state.machine,
  service: state.service
});

export default connect(
  mapStateToProps,
  { push, getMachines, getServiceType }
)(Find);
