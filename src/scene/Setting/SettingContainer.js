import React, { Component } from 'react';

import Setting from './Setting';

export default class SettingContainer extends Component {
  onPressButton = () => {
    this.props.navigation.navigate('Home2');
  }

  render() {
    return (
      <Setting
        onPressButton={this.onPressButton}
      />
    );
  }
}
