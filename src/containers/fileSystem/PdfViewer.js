import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SafeView from "../../components/common/SafeView";
import Pdf from "react-native-pdf";
import constants from "../../constants";
class componentName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { source, title } = this.props;

    return (
      <SafeView title={title} componentId={this.props.componentId}>
        <View style={styles.container}>
          <Pdf
            source={{ uri: source }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(
                `number of pages: ${numberOfPages}, filePath: ${filePath}`
              );
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`current page: ${page} of ${numberOfPages}`);
            }}
            onError={error => {
              console.log(error);
            }}
            style={styles.pdf}
          />
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = () => ({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25
  },
  pdf: {
    flex: 1,
    width: constants.BaseStyle.DEVICE_WIDTH
  }
});

export default connect(
  mapStateToProps,
  {}
)(componentName);
