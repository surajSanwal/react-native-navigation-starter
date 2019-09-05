import React from "react";
import { Dropdown } from "react-native-material-dropdown";
import PropTypes from "prop-types";
// import { moderateScale } from "../../helpers/ResponsiveFonts";
import constants from "../../constants";
const DropdownView = props => {
  return (
    <Dropdown
      label={props.label}
      data={props.data}
      selectedItemColor={constants.Colors.Turquoise}
      textColor={constants.Colors.Turquoise}
      baseColor={constants.Colors.Turquoise}
      pickerStyle={{ backgroundColor: constants.Colors.Black }}
      itemTextStyle={{ color: constants.Colors.White }}
      itemColor={constants.Colors.White}
    />
  );
};

DropdownView.defaultProps = {
  label: "Label",
  data: []
};

DropdownView.propsTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default DropdownView;
