import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import DateTimePicker from "react-native-modal-datetime-picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import WeekView from "../../components/common/WeekView";
import ValueContainer from "../../components/common/ValueContainer";
import DateView from "../../components/common/DateView";
import CollapsibleComponent from "../../components/common/CollapsibleComponent";
import ArrowButton from "../../components/common/ArrowButton";
import constants from "../../constants";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      isDateTimePickerVisible: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      businessName: "",
      abn: "",
      address: "",
      mode: "start",
      startTime: undefined,
      endTime: undefined
    };
  }
  updateDays = day => {
    let days = [...this.state.days];
    if (days.includes(day)) {
      days = days.filter(item => item !== day);
    } else {
      days.push(day);
    }
    this.setState({ days });
  };
  toggleAvailability = () => {
    this.setState({ showAvailability: !this.state.showAvailability });
  };
  toggleDateTimePicker = (mode = "start") => {
    this.setState({
      isDateTimePickerVisible: !this.state.isDateTimePickerVisible,
      mode
    });
  };

  handleDatePicked = date => {
    let { mode } = this.state;
    console.log("A date has been picked: ", date);
    if (mode === "start") {
      this.setState({ startTime: date });
    } else {
      this.setState({ endTime: date });
    }
    this.toggleDateTimePicker();
  };

  render() {
    let {
      firstName,
      lastName,
      email,
      password,
      businessName,
      abn,
      startTime,
      endTime
    } = this.state;
    return (
      <SafeView componentId={this.props.componentId} title={"Edit Profile"}>
        <View style={{ flex: 1, paddingHorizontal: moderateScale(20) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              // padding: moderateScale(10),
              flex: 0.2
            }}
          >
            <View
              style={{
                height: moderateScale(100),
                width: moderateScale(100),
                borderWidth: 1,
                borderRadius: moderateScale(100),
                marginHorizontal: moderateScale(20)
              }}
            ></View>
            <View style={{ flex: 1 }}>
              <ValueContainer
                placeholder={"First Name"}
                value={firstName}
                onChangeText={firstName => this.setState({ firstName })}
              />
              <ValueContainer
                placeholder={"Last Name"}
                value={lastName}
                onChangeText={lastName => this.setState({ lastName })}
              />
            </View>
          </View>
          <View
            style={{
              flex: 0.8,
              justifyContent: "flex-start"
            }}
          >
            {/* <View
              style={{
                flex: 0.4
              }}
            > */}
            <ValueContainer placeholder={"email"} value={email} disableEdit />
            <ValueContainer
              placeholder={"password"}
              value={password}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
            <ValueContainer
              placeholder={"Business Name"}
              value={businessName}
              onChangeText={businessName => this.setState({ businessName })}
            />
            <ValueContainer
              alwaysShowPlaceHolder
              placeholder={"ABN"}
              value={abn}
              onChangeText={abn => this.setState({ abn })}
            />
            <CollapsibleComponent title={"Availability"}>
              <WeekView
                // days={Object.keys(WeekView.Days)}
                days={this.state.days}
                onDayPress={this.updateDays}
              />
              <DateView
                title={"Time > Start"}
                time={startTime}
                onPress={() => this.toggleDateTimePicker("start")}
              />
              <DateView
                title={"Time > End"}
                time={endTime}
                onPress={() => this.toggleDateTimePicker("end")}
              />
            </CollapsibleComponent>
            {/* <CollapsibleComponent title={"Address"}> */}
            <GooglePlacesAutocomplete
              placeholder="Search"
              placeholderTextColor={constants.Colors.Turquoise}
              minLength={2}
              autoFocus={false}
              returnKeyType={"search"}
              keyboardAppearance={"light"}
              listViewDisplayed={false} // true/false/undefined
              fetchDetails={true}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log("data iiiii===>", data, details);
              }}
              query={{
                key: constants.DevKeys.GooglePlaceAPIKey,
                language: "en" // language of the results
                // types: "(cities)" // default: 'geocode'
              }}
              styles={{
                container: {
                  flex: 1,
                  backgroundColor: constants.Colors.Black,
                  borderWidth: 0
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
            {/* </CollapsibleComponent> */}
          </View>
          {/* </View> */}

          <ArrowButton
            image={constants.Images.ArrowRightWhite}
            name={"Next"}
            buttonStyle={{
              justifyContent: "center",
              alignItems: "center"
            }}
          />
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.toggleDateTimePicker}
          is24Hour
          mode="time"
        />
      </SafeView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
