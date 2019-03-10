import React, { Component } from 'react';
import { Platform, Text, StyleSheet,TouchableOpacity, View } from 'react-native';

export default class Home extends Component {
  render() {
    const { onPressButton } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home Page</Text>

        <TouchableOpacity
          style={{ backgroundColor: 'black' }}
          onPress={onPressButton}
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
