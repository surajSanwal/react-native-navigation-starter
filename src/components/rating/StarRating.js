/*
 * Filename: /Users/suraj.sanwal/Desktop/projects/react-native/ohc/src/components/rating/StarRating.js
 * Path: /Users/suraj.sanwal/Desktop/projects/react-native/ohc
 * Created Date: Friday, August 23rd 2019, 11:41:01 am
 * Author: suraj.sanwal
 *
 * Copyright (c) 2019 Your Company
 */

import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Star from "./Star";
import Constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

export default class StarRating extends Component {
  static defaultProps = {
    defaultRating: 5,
    reviews: ["Terrible", "Bad", "Okay", "Good", "Great"],
    count: 5,
    onFinishRating: () => {},
    showRating: false
  };

  constructor() {
    super();

    this.state = {
      position: 5
    };
  }

  componentDidMount() {
    const { defaultRating } = this.props;

    this.setState({ position: defaultRating });
  }

  renderStars(rating_array) {
    return _.map(rating_array, star => {
      return star;
    });
  }

  starSelectedInPosition(position) {
    const { onFinishRating } = this.props;

    onFinishRating(position);

    this.setState({ position: position });
  }

  render() {
    const { position } = this.state;
    const { count, reviews, showRating, style } = this.props;
    const rating_array = [];

    _.times(count, index => {
      rating_array.push(
        <Star
          key={index}
          position={index + 1}
          starSelectedInPosition={this.starSelectedInPosition.bind(this)}
          fill={position >= index + 1}
          {...this.props}
        />
      );
    });

    return (
      <View style={[styles.ratingContainer, style]}>
        <View style={styles.starContainer}>
          {this.renderStars(rating_array)}
        </View>
        {showRating && (
          <Text style={styles.reviewText}>{reviews[position - 1]}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ratingContainer: {
    backgroundColor: "transparent",
    flexDirection: "column",
    alignSelf: "flex-start"
    // alignItems: "center",
    // justifyContent: "center",
  },
  reviewText: {
    fontSize: moderateScale(27),
    fontWeight: "bold",
    margin: 10,
    color: Constants.Colors.Primary,
    ...Constants.Fonts.TitilliumWebSemiBold
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
