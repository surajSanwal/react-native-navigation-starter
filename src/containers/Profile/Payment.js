import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import FormTextInput from "../../components/common/FormTextInput";
import ArrowButton from "../../components/common/ArrowButton";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourlyRate: 0,
      travelCost: 0,
      bankName: "",
      bankAccount: 0,
      bsb: ""
    };
  }

  render() {
    let { hourlyRate, travelCost, bankName, bankAccount, bsb } = this.state;
    return (
      <SafeView title={"Payment"} componentId={this.props.componentId}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Payment</Text>
          </View>
          <View>
            <FormTextInput
              title={"Hourly Rate"}
              placeholder={"$ 0000.00"}
              value={hourlyRate}
              onChangeText={hourlyRate => this.setState({ hourlyRate })}
            />
            <FormTextInput
              title={"Travel Cost p/km"}
              placeholder={"$ 0000.00"}
              value={travelCost}
              onChangeText={travelCost => this.setState({ travelCost })}
            />
            <FormTextInput
              title={"Bank Acct "}
              placeholder={"Name"}
              value={bankName}
              onChangeText={bankName => this.setState({ bankName })}
            />
            <FormTextInput
              title={"Bank Acct #"}
              placeholder={"000000"}
              value={bankAccount}
              onChangeText={bankAccount => this.setState({ bankAccount })}
            />
            <FormTextInput
              title={"BSB"}
              placeholder={"000000"}
              value={bsb}
              onChangeText={bsb => this.setState({ bsb })}
            />
          </View>
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
    paddingLeft: moderateScale(70),
    paddingRight: moderateScale(10)
  },
  titleContainer: {
    borderBottomColor: constants.Colors.Turquoise,
    borderBottomWidth: 1,
    marginBottom: moderateScale(10)
  },
  title: {
    ...constants.Fonts.ITCAvantGardeStdBold,
    fontSize: moderateScale(22),
    fontWeight: "bold",
    color: constants.Colors.Turquoise,
    marginBottom: moderateScale(5)
  },
  buttonStyle: {
    alignSelf: "center"
  },
  textBelow: {
    paddingLeft: moderateScale(0),
    fontSize: moderateScale(25),
    ...constants.Fonts.ITCAvantGardeStdBk
  }
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(Payment);
