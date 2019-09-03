import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import Icon from "react-native-vector-icons/FontAwesome";

let arr = [
  {
    date: "June 2019",
    data: [
      {
        id: 1,
        date: "12/06/19",
        location: "Sunshine state plumbing",
        price: "481.50"
      },
      {
        id: 2,
        date: "13/06/19",
        location: "Chester Int. Tech",
        price: "1251.50"
      },
      { id: 3, date: "14/06/19", location: "Dennis Group", price: "853.50" },
      {
        id: 4,
        date: "15/06/19",
        location: "Sunshine state plumbing",
        price: "750.50"
      },
      {
        id: 5,
        date: "16/06/19",
        location: "Sunshine state plumbing",
        price: "445.50"
      }
    ]
  },

  {
    date: "August 2019",
    data: [
      {
        id: 1,
        date: "12/06/19",
        location: "Sunshine state plumbing",
        price: "481.50"
      },
      {
        id: 2,
        date: "13/06/19",
        location: "Chester Int. Tech",
        price: "1251.50"
      },
      { id: 3, date: "14/06/19", location: "Dennis Group", price: "853.50" },
      {
        id: 4,
        date: "15/06/19",
        location: "Sunshine state plumbing",
        price: "750.50"
      },
      {
        id: 5,
        date: "16/06/19",
        location: "Sunshine state plumbing",
        price: "445.50"
      }
    ]
  }
];

const renderItems = (items, key) => (
  <TouchableOpacity style={style.items} key={key}>
    <Text style={style.singleItem}>{items.date}</Text>
    <Text style={[style.singleItem, { color: constants.Colors.White }]}>
      {items.location}
    </Text>
    <Text style={style.singleItem}>${items.price}</Text>
    <Icon name="angle-right" size={25} color="white" />
  </TouchableOpacity>
);

const renderFlatlist = item => (
  <View style={style.content}>
    <Text style={style.date}>{item.date}</Text>
    {item.data.map((items, key) => renderItems(items, key))}
  </View>
);

const PreviousJobs = () => {
  return (
    <View>
      <FlatList data={arr} renderItem={({ item }) => renderFlatlist(item)} />
    </View>
  );
};

const style = StyleSheet.create({
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: constants.Colors.White,
    borderBottomWidth: 1,
    marginVertical: moderateScale(10)
  },
  singleItem: {
    color: constants.Colors.Turquoise,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(10)
  },
  date: {
    color: constants.Colors.Yellowish,
    fontSize: moderateScale(18)
  },
  content: {
    marginHorizontal: moderateScale(30)
  }
});

export default PreviousJobs;
