import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component {

  render() {
    const { onPressLogin } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Login Which loads first</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'red' }}
          onPress={onPressLogin}
        >
          <Text style={{ padding: 20, color: 'white' }}>Login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
