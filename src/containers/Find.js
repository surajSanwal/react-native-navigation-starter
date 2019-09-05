/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/jetX/src/containers/Find.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/jetX
 * Created Date: Wednesday, August 21st 2019, 6:56:20 pm
 * Author: Suraj Sanwal
 *
 * Copyright (c) 2019 smartData Inc
 */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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
import moment from "moment";

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      marked: null,
      markedDates: []
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
  onDayPressFunc = day => {
    /*
    {
          date: day.dateString,
          selected: true,
          endingDay: true,
          startingDay: true
  }
  */ let markedDates = [
      ...this.state.markedDates
    ];
    if (!markedDates.length) {
      markedDates.push({
        dateString: day.dateString,
        selected: true,
        endingDay: true,
        startingDay: true,
        color: constants.Colors.Gray
      });
    } else if (moment(day.dateString).isBefore(markedDates[0].dateString)) {
      markedDates[0].startingDay = false;
      let current = moment(day.dateString);
      while (current.isBefore(markedDates[0].dateString)) {
        markedDates.push({
          dateString: current.format("YYYY-MM-DD"),
          selected: true,
          endingDay: false,
          startingDay: false,
          color: constants.Colors.Gray
        });
        current.add(1, "day");
      }
    } else {
      let current = moment(day.dateString);
      while (current.isAfter(markedDates[0].dateString)) {
        markedDates.push({
          dateString: current.format("YYYY-MM-DD"),
          selected: true,
          endingDay: false,
          startingDay: false,
          color: constants.Colors.Gray
        });
        current.subtract(1, "day");
      }
    }
    var sortedArray = markedDates.sort(
      (a, b) =>
        moment(a.dateString).format("YYYYMMDD") -
        moment(b.dateString).format("YYYYMMDD")
    );
    if (sortedArray.length > 1) {
      sortedArray[0].startingDay = true;
      sortedArray[0].endingDay = false;
      sortedArray[sortedArray.length - 1].endingDay = true;
    }
    console.log("markedDates", markedDates, sortedArray);
    this.setState({ markedDates: sortedArray });
  };

  parseDate = () => {
    let markedDates = [...this.state.markedDates];
    return (markedDates = markedDates.reduce((obj, item) => {
      obj[item.dateString] = { ...item };
      delete obj[item.dateString].dateString;
      return obj;
    }, {}));
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
        <View style={style.containerStyle}>
          <Text style={style.title}>What are you looking for?</Text>
          <View style={{ flex: 1 }}>
            <DropdownView data={serviceList} label={"Service Type"} />
            <DropdownView data={machineList} label={"Machine Type"} />
            <View style={style.whenWrapper}>
              <Text style={style.whenText} onPress={this.toggleModal}>
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
        <ModalCenterView
          modalStyle={style.modalStyle}
          visible={modalVisible}
          onCloseModal={this.toggleModal}
        >
          <Calendar
            theme={{
              backgroundColor: constants.Colors.Turquoise,
              calendarBackground: constants.Colors.Turquoise,
              textSectionTitleColor: constants.Colors.DarkBlack,
              selectedDayBackgroundColor: constants.Colors.DarkBlack,
              selectedDayTextColor: constants.Colors.DarkBlack,
              textMonthFontFamily: "ITCAvantGardeStd-Bold",
              monthTextColor: constants.Colors.DarkBlack,
              textMonthFontWeight: "bold",
              arrowColor: constants.Colors.Gray
            }}
            onDayPress={this.onDayPressFunc}
            markedDates={this.parseDate(this.state.markedDates)}
            markingType={"period"}
          />
        </ModalCenterView>
      </SafeView>
    );
  }
}

const style = StyleSheet.create({
  containerStyle: { flex: 1, padding: moderateScale(70) },
  title: {
    color: constants.Colors.White,
    ...constants.Fonts.ITCAvantGardeProBk,
    fontSize: moderateScale(32)
  },
  whenWrapper: {
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1,
    paddingTop: moderateScale(5)
  },
  whenText: {
    color: constants.Colors.Turquoise,
    paddingVertical: moderateScale(5),
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1,
    fontSize: moderateScale(15)
  },
  modalStyle: {
    backgroundColor: constants.Colors.Turquoise,
    marginTop: "60%"
  }
});

const mapStateToProps = state => ({
  machine: state.machine,
  service: state.service
});

export default connect(
  mapStateToProps,
  { push, getMachines, getServiceType }
)(Find);
