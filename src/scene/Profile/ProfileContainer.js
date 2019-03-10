import React, { Component } from 'react';

import Profile from './Profile';

export default class ProfileContainer extends Component {
  onPressButton = () => {
    this.props.navigation.navigate('Home2');
  }

  render() {
    return (
      <Profile
        onPressButton={this.onPressButton}
      />
    );
  }
}
