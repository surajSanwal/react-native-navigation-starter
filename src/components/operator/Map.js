import React, { Component } from "react";
// import { View, Text } from "react-native";
import { connect } from "react-redux";
import SafeView from "../common/SafeView";
import MapViewComponent from "../common/MapView";
import MapApi from "../../helpers/MapApi";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  componentDidMount() {
    MapApi.getCurrentPosition()
      .then(currentLocation => {
        console.log("current location", currentLocation);

        this.setState({ currentLocation });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <SafeView title={"Map"} componentId={this.props.componentId}>
        <MapViewComponent region={this.state.currentLocation} />
      </SafeView>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(Maps);
