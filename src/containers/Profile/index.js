import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import constants from "../../constants";
import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";

const ValueContainer = props => {
  return (
    <View
      style={{
        borderBottomColor: constants.Colors.Turquoise,
        borderBottomWidth: 1,
        padding: moderateScale(5),
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {props.alwaysShowPlaceHolder && (
        <Text
          style={[
            {
              ...constants.Fonts.ITCAvantGardeProBk,
              fontSize: moderateScale(18),
              color: constants.Colors.Turquoise
            },
            props.style
          ]}
        >
          {props.placeholder}
        </Text>
      )}
      <TextInput
        editable={props.editable}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        style={[
          {
            ...constants.Fonts.ITCAvantGardeProBk,
            width: "100%",
            fontSize: moderateScale(18),
            color: constants.Colors.Turquoise
          },
          props.style
        ]}
        underlineColorAndroid={constants.Colors.Transparent}
      />
    </View>
  );
};

export class Profile extends Component {
  constructor(props) {
    super(props);
  }
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
              placeholder={"email"}
              value={"ABN"}
            />
          </View>
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
