import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import FormTextInput from "../../components/common/FormTextInput";

class componentName extends Component {
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
    borderBottomWidth: 1
  },
  title: {
    ...constants.Fonts.ITCAvantGardeProMd,
    fontSize: moderateScale(22),
    fontWeight: "bold",
    color: constants.Colors.Turquoise
  }
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(componentName);
