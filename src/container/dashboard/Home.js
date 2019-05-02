import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { goToAuth } from "../../config/navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AppAction from "../../actions";
import { removeListeners } from "../../utilities/listeners";
import { handleBackPress } from "../../utilities/BackButtonHandling";
import { Navigation } from "react-native-navigation";
import { manageComponentStats } from "../../actions/componentStats";
import Loader from "./../../components/common/loader";

import GeneralCard from "../../components/generalCard";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import Icon from "react-native-vector-icons/FontAwesome";
import constants from "../../constants";

let removeListener = true;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.isSideDrawerVisible = false;
    Navigation.events().bindComponent(this);
  }

  static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (props.listData !== (state && state.listData)) {
      return {
        listData: props.listData
      };
    }
    // No state update necessary
    return null;
  }

  navigationButtonPressed({ buttonId }) {
    !this.isSideDrawerVisible
      ? (this.isSideDrawerVisible = true)
      : (this.isSideDrawerVisible = false);
    if (buttonId === "buttonOne") {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: this.isSideDrawerVisible
          }
        }
      });
    }
  }

  componentDidMount() {}
  componentWillUnmount() {
    if (removeListener) {
      removeListeners();
    }
  }

  logout = () => {
    removeListener = false;
    this.props.logOut();
    goToAuth();
  };

  navigateToNextScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "CardScannerScreen",
        options: {
          bottomTabs: {
            visible: false,
            drawBehind: true,
            animate: true
          }
        }
      }
    });
  };

  onCardPress = item => {
    console.log("propes===><<<<====", this.props);
    this.props.AppAction.pushToParticularScreen(
      this.props.componentId,
      "GeneralDetails",
      { data: item }
    );
  };

  render() {
    let data = [
      {
        title: "GENERAL",
        by: "Ushma",
        date: "06 March 2019",
        message: `Conference on SDG 7 for SDG 8: Sustainable Energy and Livelihood
      Nexus @ IIM Bangalore [April 26-27]`,
        detailedMessage:
          "SELCO Foundation is hosting a conference on SDG 7 for SDG 8 on the theme ‘Replicable Solutions for Sustainable Energy and Income Generating Applications’ at IIM Bangalore on April 26-27.",
        about:
          "he two-day event will bring together stakeholders to discuss replicable models and processes that can scale sustainable energy, livelihood solutions and transform under-served communities.The conference would bring forward the importance of sustainable energy in developing livelihood interventions at the grassroots level, leading to inclusivity and democratization of wealth distribution. It hopes to bring to light some of the much-needed livelihood relatedopportunities, that are primarily poor centric, and the related challenges with appropriate solutions"
      },
      {
        title: "GENERAL",
        by: "Ushma",
        date: "06 March 2019",
        message: `Conference on SDG 7 for SDG 8: Sustainable Energy and Livelihood
      Nexus @ IIM Bangalore [April 26-27]`,
        detailedMessage:
          "SELCO Foundation is hosting a conference on SDG 7 for SDG 8 on the theme ‘Replicable Solutions for Sustainable Energy and Income Generating Applications’ at IIM Bangalore on April 26-27.",
        about:
          "he two-day event will bring together stakeholders to discuss replicable models and processes that can scale sustainable energy, livelihood solutions and transform under-served communities.The conference would bring forward the importance of sustainable energy in developing livelihood interventions at the grassroots level, leading to inclusivity and democratization of wealth distribution. It hopes to bring to light some of the much-needed livelihood relatedopportunities, that are primarily poor centric, and the related challenges with appropriate solutions"
      },
      {
        title: "GENERAL",
        by: "Ushma",
        date: "06 March 2019",
        message: `Conference on SDG 7 for SDG 8: Sustainable Energy and Livelihood
      Nexus @ IIM Bangalore [April 26-27]`,
        detailedMessage:
          "SELCO Foundation is hosting a conference on SDG 7 for SDG 8 on the theme ‘Replicable Solutions for Sustainable Energy and Income Generating Applications’ at IIM Bangalore on April 26-27.",
        about:
          "he two-day event will bring together stakeholders to discuss replicable models and processes that can scale sustainable energy, livelihood solutions and transform under-served communities.The conference would bring forward the importance of sustainable energy in developing livelihood interventions at the grassroots level, leading to inclusivity and democratization of wealth distribution. It hopes to bring to light some of the much-needed livelihood relatedopportunities, that are primarily poor centric, and the related challenges with appropriate solutions"
      },
      {
        title: "GENERAL",
        by: "Ushma",
        date: "06 March 2019",
        message: `Conference on SDG 7 for SDG 8: Sustainable Energy and Livelihood
      Nexus @ IIM Bangalore [April 26-27]`,
        detailedMessage:
          "SELCO Foundation is hosting a conference on SDG 7 for SDG 8 on the theme ‘Replicable Solutions for Sustainable Energy and Income Generating Applications’ at IIM Bangalore on April 26-27.",
        about:
          "he two-day event will bring together stakeholders to discuss replicable models and processes that can scale sustainable energy, livelihood solutions and transform under-served communities.The conference would bring forward the importance of sustainable energy in developing livelihood interventions at the grassroots level, leading to inclusivity and democratization of wealth distribution. It hopes to bring to light some of the much-needed livelihood relatedopportunities, that are primarily poor centric, and the related challenges with appropriate solutions"
      },
      {
        title: "GENERAL",
        by: "Ushma",
        date: "06 March 2019",
        message:
          "Conference on SDG 7 for SDG 8: Sustainable Energy and Livelihood Nexus @ IIM Bangalore [April 26-27]",
        detailedMessage:
          "SELCO Foundation is hosting a conference on SDG 7 for SDG 8 on the theme ‘Replicable Solutions for Sustainable Energy and Income Generating Applications’ at IIM Bangalore on April 26-27.",
        about:
          "he two-day event will bring together stakeholders to discuss replicable models and processes that can scale sustainable energy, livelihood solutions and transform under-served communities.The conference would bring forward the importance of sustainable energy in developing livelihood interventions at the grassroots level, leading to inclusivity and democratization of wealth distribution. It hopes to bring to light some of the much-needed livelihood relatedopportunities, that are primarily poor centric, and the related challenges with appropriate solutions"
      }
    ];
    if (false) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Loader />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, paddingHorizontal: moderateScale(25) }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.toString() + index.toString()}
          renderItem={({ item, index }) => {
            return (
              <GeneralCard
                data={item}
                key={index}
                detailedMessage={false}
                onCardPress={this.onCardPress}
              />
            );
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: moderateScale(20),
            bottom: moderateScale(20),
            height: moderateScale(40),
            width: moderateScale(40),
            borderRadius: moderateScale(100),
            backgroundColor: "rgb(62, 156, 236)",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon name={"sliders"} size={30} color={constants.Colors.White} />
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    componentStats: state.componentStats.componentStats
  };
}

const mapDispatchToProps = dispatch => ({
  AppAction: bindActionCreators(AppAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({});
