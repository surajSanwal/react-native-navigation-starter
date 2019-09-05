import React, { Component } from "react";
import { connect } from "react-redux";
import { WebView } from "react-native-webview";
import Connection from "../config/connection";
import SafeView from "../components/common/SafeView";
class WebViewContainer extends Component {
  constructor(props) {
    super(props);
  }
  handleWebViewNavigationStateChange = newNavState => {
    const { url } = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes(".pdf")) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes("?message=success")) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes("?errors=true")) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes("google.com")) {
      const newURL = "https://facebook.github.io/react-native/";
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }
  };

  render() {
    return (
      <SafeView
        drawerEnabled
        componentId={this.props.componentId}
        title={this.props.title}
      >
        <WebView
          ref={ref => (this.webview = ref)}
          injectedJavaScript={false}
          javaScriptEnabled={false}
          source={{ uri: Connection.getCmsUrl() + this.props.url }}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
          onMessage={event => {
            alert(event.nativeEvent.data);
          }}
        />
      </SafeView>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(WebViewContainer);
