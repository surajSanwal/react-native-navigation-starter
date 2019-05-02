import React, { Suspense } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { goToAuth } from "../../config/navigation";
import { Navigation } from "react-native-navigation";

class UsersList extends React.Component {
  /*
		Constructor Function
	*/
  constructor(props) {
    super(props);
    this.isSideDrawerVisible = false;
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

  render() {
    return (
      <FlatList
        data={
          this.props.listData && this.props.listData.length > 0
            ? this.props.listData
            : []
        }
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 10
            }}
            key={index}
            onPress={this.props.navigateToNextScreen}
          >
            <View style={{ flex: 0.7, padding: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.item}>ID : </Text>
                <Text style={styles.item}>{item.id}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.item}>First Name : </Text>
                <Text style={styles.item}>{item.first_name}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.item}>Last Name : </Text>
                <Text style={styles.item}>{item.last_name}</Text>
              </View>
            </View>
            <View style={{ flex: 0.3, justifyContent: "center" }}>
              <Image
                source={{ uri: item.avatar }}
                style={{ height: 80, width: 80, borderRadius: 40 }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default UsersList;
