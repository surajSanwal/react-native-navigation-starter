import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import WeekView from "../../components/common/WeekView";
import ValueContainer from "../../components/common/ValueContainer";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
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
  render() {
    return (
      <SafeView componentId={this.props.componentId} title={"Edit Profile"}>
        <View style={{ flex: 1, paddingHorizontal: moderateScale(20) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              padding: moderateScale(10)
            }}
          >
            <View
              style={{
                height: moderateScale(150),
                width: moderateScale(150),
                borderWidth: 1,
                borderRadius: moderateScale(100),
                marginHorizontal: moderateScale(20)
              }}
            ></View>
            <View style={{ bottom: moderateScale(20) }}>
              <ValueContainer placeholder={"email"} value={"Suraj"} />
              <ValueContainer placeholder={"email"} value={"Sanwal"} />
            </View>
          </View>
          <View style={{ flex: 0.4, justifyContent: "space-around" }}>
            <ValueContainer placeholder={"email"} value={"bob@gmail.com"} />
            <ValueContainer
              placeholder={"email"}
              value={"Suraj"}
              secureTextEntry={true}
            />
            <ValueContainer placeholder={"email"} value={"Business Name"} />
            <ValueContainer
              alwaysShowPlaceHolder
              placeholder={"ABN"}
              value={"00000000000"}
            />
          </View>
          <WeekView
            // days={Object.keys(WeekView.Days)}
            days={this.state.days}
            onDayPress={this.updateDays}
          />
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
