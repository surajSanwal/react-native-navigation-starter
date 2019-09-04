import React, { Component } from "react";
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Files from "../../helpers/Files";
import SafeView from "../../components/common/SafeView";
import Icon from "react-native-vector-icons/FontAwesome5";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import { push } from "../../actions";
class FileSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
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
  openFile = file => {
    this.props.push(this.props.componentId, "PDFViewer", {
      source: file.path,
      title: file.name
    });
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
        <FlatList
          data={this.state.files}
          keyExtractor={item => item.path}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => this.openFile(item)}
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                margin: moderateScale(10)
              }}
            >
              <Icon
                name={"file"}
                color={constants.Colors.Turquoise}
                size={35}
              />
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flex: 0.8
                }}
              >
                <Text style={{ color: "#fff", fontSize: moderateScale(18) }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeView>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = { push };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileSystem);
