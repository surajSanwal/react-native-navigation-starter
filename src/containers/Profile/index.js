import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { connect } from "react-redux";
import DateTimePicker from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import WeekView from "../../components/common/WeekView";
import ValueContainer from "../../components/common/ValueContainer";
import DateView from "../../components/common/DateView";
import CollapsibleComponent from "../../components/common/CollapsibleComponent";
import ArrowButton from "../../components/common/ArrowButton";
import constants from "../../constants";
import Address from "../../components/common/Address";
import RenderTextIcon from "../../components/common/RenderTextIcon";
import StarRating from "../../components/rating/StarRating";
import Icon from "react-native-vector-icons/FontAwesome5";
import Pricing from "../../components/common/Pricing";
import FileUpload from "../../components/common/FileUpload";

let prices = ["$4", "$5", "$6"];
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      isDateTimePickerVisible: false,
      first_Name: "",
      last_Name: "",
      user_Email: "",
      password: "",
      businessName: "",
      abn: "",
      address: "",
      mode: "start",
      startTime: undefined,
      endTime: undefined,
      bankAccount:
        "Suncorp Bank\nBSB: 000 000\nAcc: '#1233 2340'\nAcc name: Bob McIntosh",
      physicalAddress: "1/109\nKingston Rd,\nLogan Central Q 4114",
      mailingAddress: "PO Box 2345\nLogan Central Q 4114"
    };
  }
  componentDidMount() {
    console.log("this.props.user", this.props.user);
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
      password,
      businessName,
      // abn,
      startTime,
      endTime,
      bankAccount,
      physicalAddress,
      mailingAddress
    } = this.state;
    let {
      user: { firstName, lastName, email }
    } = this.props;
    return (
      <SafeView componentId={this.props.componentId} title={"Edit Profile"}>
        <KeyboardAwareScrollView
          enableAutomaticScroll
          enableOnAndroid
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={{ flex: 1, paddingHorizontal: moderateScale(20) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: moderateScale(10),
                // padding: moderateScale(10),
                flex: 0.2
              }}
            >
              <ImageBackground
                style={{
                  height: moderateScale(100),
                  width: moderateScale(100),
                  borderWidth: 1,
                  borderColor: constants.Colors.Turquoise,
                  borderRadius: moderateScale(100),
                  // marginHorizontal: moderateScale(20)
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <View>
                  <Icon name={"camera"} size={18} color="white" />
                </View>
              </ImageBackground>

              <View>
                <Text
                  style={{
                    textAlign: "right",
                    color: constants.Colors.Turquoise,
                    fontSize: moderateScale(18),
                    ...constants.Fonts.ITCAvantGardeStdBold
                  }}
                >
                  134
                </Text>
                <Text
                  style={{
                    color: constants.Colors.Turquoise,
                    fontSize: moderateScale(16)
                  }}
                >
                  Jobs Completed
                </Text>
                <StarRating
                  starSize={10}
                  size={20}
                  showRating={false}
                  style={{ paddingTop: 2 }}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0.8,
                justifyContent: "flex-start"
              }}
            >
              <View style={{ flex: 1 }}>
                <ValueContainer
                  placeholder={"First Name"}
                  value={firstName}
                  onChangeText={first_Name => this.setState({ first_Name })}
                />
                <ValueContainer
                  placeholder={"Last Name"}
                  value={lastName}
                  onChangeText={last_Name => this.setState({ last_Name })}
                />
              </View>
              <ValueContainer placeholder={"email"} value={email} disableEdit />
              <ValueContainer
                placeholder={"password"}
                value={password}
                secureTextEntry={true}
                onChangeText={user_Email => this.setState({ user_Email })}
              />
              <ValueContainer
                placeholder={"Business Name"}
                value={businessName}
                onChangeText={businessName => this.setState({ businessName })}
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
              {/********************************* */}
              <Pricing prices={prices} />
              <FileUpload />
              {/* <CollapsibleComponent title={"Address"}> */}
              <ValueContainer
                alwaysShowPlaceHolder
                placeholder={"ABN"}
                value="000 000 000"
                onChangeText={abn => this.setState({ abn })}
              />
              <Address
                title="Bank account"
                data={bankAccount}
                editable={true}
              />
              <Address
                title="Physical Address"
                data={physicalAddress}
                editable={true}
              />
              <Address
                title="Mailing Address"
                data={mailingAddress}
                editable={true}
              />
              <RenderTextIcon
                name="Experience"
                icons="angle-right"
                iconColor={constants.Colors.Turquoise}
                iconSize={25}
              />
              <RenderTextIcon
                name="Reviews"
                icons="angle-right"
                iconColor={constants.Colors.Turquoise}
                iconSize={25}
              />
              <RenderTextIcon
                name="Equipment"
                icons="angle-right"
                iconColor={constants.Colors.Turquoise}
                iconSize={25}
              />
              <RenderTextIcon
                name="Social Media"
                icons="angle-right"
                iconColor={constants.Colors.Turquoise}
                iconSize={25}
              />
              <RenderTextIcon
                name="Partners Agreement"
                iconColor={constants.Colors.Turquoise}
                icons="angle-right"
                iconSize={25}
              />
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
              image={constants.Images.ArrowUpGreen}
              name={"Save Changes"}
              buttonReverse
              buttonStyle={{
                justifyContent: "center",
                alignItems: "center"
              }}
              textStyle={{ fontSize: moderateScale(24) }}
              height={50}
              width={50}
            />
          </View>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.toggleDateTimePicker}
            is24Hour
            mode="time"
          />
        </KeyboardAwareScrollView>
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
