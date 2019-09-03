import React, { Component } from "react";
// import { Text, View } from "react-native";
import SafeView from "../../components/common/SafeView";
import JobsContainer from "../../components/common/JobsContainer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RoundButton from "../../components/common/RoundButton";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import PreviousJobs from "../../components/common/PreviousJobs";
import CollapsibleComponent from "../../components/common/CollapsibleComponent";

class Jobs extends Component {
  render() {
    return (
      <SafeView
        hideBack
        componentId={this.props.componentId}
        title={"Home"}
        drawerEnabled
      >
        <KeyboardAwareScrollView
          enableAutomaticScroll
          enableOnAndroid
          keyboardShouldPersistTaps={"handled"}
        >
          <CollapsibleComponent
            title="Previous Jobs"
            buttonStyle={{ marginHorizontal: moderateScale(30) }}
          >
            <PreviousJobs />
          </CollapsibleComponent>

          <JobsContainer
            day={"Today"}
            date={"Wed 12 June"}
            contentTitle={"Sunshine State Plumbing"}
          />
          <RoundButton
            name="LEAVING"
            buttonStyle={{ marginTop: moderateScale(30) }}
          />
          <JobsContainer
            day={"Tomorrow"}
            date={"Thusday 13 June"}
            contentTitle={"Sunshine State Plumbing"}
          />
          <JobsContainer
            day={"Friday"}
            date={"Wed 14 June"}
            contentTitle={"Sunshine State Plumbing"}
          />
        </KeyboardAwareScrollView>
      </SafeView>
    );
  }
}

export default Jobs;
