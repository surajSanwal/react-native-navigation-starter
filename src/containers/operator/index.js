import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";

class OperatorDashboard extends Component {
  render() {
    return (
      <SafeView
        hideBack
        componentId={this.props.componentId}
        title={"Home"}
        drawerEnabled
      >
        <View style={{ flex: 1 }}>
          <View></View>
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(OperatorDashboard);
