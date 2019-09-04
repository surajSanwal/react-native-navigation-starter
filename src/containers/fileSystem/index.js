import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import Files from "../../helpers/Files";
import SafeView from "../../components/common/SafeView";

class FileSystem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Files.createFolder("download")
      .then(resp => console.log("Files-===>createFolder==>", resp))
      .catch(e => console.log("error on file==>createFolder===>", e));
    Files.readFiles("download")
      .then(resp => this.setState({ files: resp }))
      .catch(e => console.log("error on file==>readFiles==>", e));
  }

  downLoadFile = () => {
    Files.downloadFile(
      "https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf"
    )
      .then(resp => console.log("Files-===>", resp))
      .catch(e => console.log("error on file==>", e));
  };

  uploadFile = () => {
    console.log("this.state.files[0].path", this.state.files[0].path);

    Files.uploadFile("localhost:3000/upload", this.state.files[0].path)
      .then(resp => console.log("Files-===>", resp))
      .catch(e => console.log("error on file==>", e));
  };

  render() {
    return (
      <SafeView title={"File System"} componentId={this.props.componentId}>
        <Text style={{ color: "#fff" }} onPress={this.downLoadFile}>
          Download File
        </Text>
        <Text style={{ color: "#fff" }} onPress={this.uploadFile}>
          Upload File
        </Text>
      </SafeView>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileSystem);
