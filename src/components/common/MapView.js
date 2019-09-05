import React from "react";
import { StyleSheet, Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import constants from "../../constants";

const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const MapViewComponent = props => {
  console.log("MapViewComponent===>props", props);

  return (
    <MapView
      initialRegion={INITIAL_REGION}
      provider={Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
      showsUserLocation
      showsCompass
      showsTraffic
      zoomEnabled
      zoomTapEnabled
      rotateEnabled
      loadingEnabled
      loadingIndicatorColor={constants.Colors.Turquoise}
      style={styles.mapStyle}
      region={props.region || INITIAL_REGION}
    />
  );
};

export default MapViewComponent;

const styles = StyleSheet.create({
  mapStyle: {
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 95,
    width: constants.BaseStyle.DEVICE_WIDTH,
    borderWidth: 1,
    borderColor: constants.Colors.Red
  }
});
