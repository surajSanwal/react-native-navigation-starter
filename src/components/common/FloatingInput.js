import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  //   Image,
  //   TouchableOpacity,
  //   ActivityIndicator,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";

class FloatingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      value: this.props.value
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };
  handleBlur = () => this.setState({ isFocused: false });
  focus() {
    this.inputBox.focus();
  }
  render() {
    const {
      label,
      value,
      editable,
      autoCapitalize,
      returnKeyType,
      // onCancel,
      // onUpdate,
      // loading,
      ...props
    } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      //   ...Constants.Fonts.TitilliumWebRegular,
      //   position: "absolute",
      left: moderateScale(5),
      top: !isFocused && !value ? moderateScale(20) : moderateScale(0),
      fontSize: !isFocused && !value ? moderateScale(20) : moderateScale(18),
      color:
        isFocused || value
          ? constants.Colors.White
          : constants.Colors.Turquoise,
      display: isFocused || value ? "flex" : "none"
    };
    return (
      <View style={Styles.container}>
        <Text style={labelStyle}>{label}</Text>
        <View style={Styles.inputWrapper}>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder={!isFocused ? label : ""}
              placeholderTextColor={constants.Colors.Turquoise}
              ref={ref => (this.inputBox = ref || "inputbox")}
              style={Styles.inputStyle}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={value}
              editable={editable}
              autoCapitalize={autoCapitalize}
              returnKeyType={returnKeyType || "next"}
              {...props}
            />
          </View>
          {/* {value1 !== value && editable ? (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={Styles.pad5} onPress={onCancel}>
                <View style={Styles.cancelImg}>
                  <Image
                    source={Constants.Images.Common.Cancel}
                    resizeMode={"contain"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.pad5} onPress={onUpdate}>
                <View style={Styles.submitImg}>
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Image
                      source={Constants.Images.Common.Accept}
                      resizeMode={"contain"}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          ) : null} */}
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(15)
  },
  inputStyle: {
    // ...Constants.Fonts.TitilliumWebRegular,
    height: moderateScale(50),
    fontSize: moderateScale(18),
    color: constants.Colors.Turquoise,
    left: moderateScale(5)
    //backgroundColor:'red',
    // width:Constants.BaseStyle.DEVICE_WIDTH*0.5
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: constants.Colors.Turquoise
    //backgroundColor: "#aabbcc"
  },
  cancelImg: {
    backgroundColor: "#A9AFAF",
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  submitImg: {
    backgroundColor: "#F6CF65",
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  pad5: { padding: 5 }
});

FloatingInput.defaultProps = {
  label: "",
  value: "",
  editable: true,
  onCancel: () => {},
  onUpdate: () => {},
  loading: false,
  autoCapitalize: "none"
};

FloatingInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  editable: PropTypes.bool,
  onCancel: PropTypes.func,
  onUpdate: PropTypes.func,
  loading: PropTypes.bool,
  autoCapitalize: PropTypes.string
};
export default FloatingInput;
