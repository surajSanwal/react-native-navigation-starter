import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/common/Button';
import {push} from '../../actions';

const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          text="Click to go Home"
          onPress={() => push(props.componentId, 'Home', 'Home')}
        />
      </View>
    </View>
  );
};

export default Login;
