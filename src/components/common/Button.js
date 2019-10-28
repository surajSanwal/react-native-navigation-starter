import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.container}>
      <Text style={style.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#0000ff7F',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
});
export default Button;
