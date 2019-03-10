import React, { Component } from 'react';

import Home from './Home';

export default class HomeContainer extends Component {
  onPressButton = () => {
    this.props.navigation.navigate('Home2');
  }

  render() {
    return (
      <Home
        onPressButton={this.onPressButton}
      />
    );
  }
}

