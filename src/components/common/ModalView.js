import React from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Text,
  ActivityIndicator
} from "react-native";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import PropTypes from "prop-types";
import constants from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";

const ModalView = props => {
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      animationType="fade"
      onRequestClose={props.onCloseModal}
    >
      <TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            flex: 1,
            justifyContent: "flex-end"
          }}
        >
          <View
            style={
              props.containerStyle
                ? props.containerStyle
                : {
                    flex: 0.4,
                    backgroundColor: "white",
                    borderTopRightRadius: moderateScale(25),
                    borderTopLeftRadius: moderateScale(25)
                  }
            }
          >
            <TouchableOpacity
              onPress={props.onCloseModal}
              style={{
                backgroundColor: "#DBE8F3",
                height: moderateScale(5),
                width: moderateScale(35),
                alignSelf: "center",
                marginVertical: moderateScale(5),
                borderRadius: moderateScale(25)
              }}
            />
            {!props.loading ? (
              <View style={{ paddingHorizontal: moderateScale(20), flex: 1 }}>
                {props.children}
              </View>
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

ModalView.defaultProps = {
  visible: false,
  onCloseModal: () => {}
};

ModalView.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired
};

export const ModalCenterView = props => (
  <Modal
    transparent={true}
    visible={props.visible}
    animationType="fade"
    onRequestClose={props.onCloseModal}
  >
    <TouchableWithoutFeedback onPress={props.onCloseModal}>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          height: constants.BaseStyle.DEVICE_HEIGHT,
          justifyContent: "center"
        }}
      >
        <View
          style={[
            {
              backgroundColor: "rgba(255,255,255,1)",
              borderRadius: moderateScale(25)
            },
            props.modalStyle
          ]}
        >
          <View
            style={{
              marginVertical: moderateScale(5),
              right: moderateScale(20),
              borderRadius: moderateScale(5),
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: moderateScale(30),
              paddingVertical: moderateScale(5),
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontFamily: constants.Fonts.MontserratBold,
                fontSize: moderateScale(24)
                // padding: moderateScale(5)
              }}
            >
              {props.title}
            </Text>
            <Icon name={"times"} size={18} onPress={props.onCloseModal} />
          </View>
          <View
            style={{
              paddingHorizontal: moderateScale(20),
              zIndex: 99999
            }}
          >
            {props.children}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

ModalCenterView.defaultProps = {
  visible: false,
  onCloseModal: () => {}
};

ModalCenterView.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired
};
export default ModalView;
