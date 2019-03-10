import React, { Component } from 'react';

import Login from './Login';

export default class LoginContainer extends Component {

    onPressLogin = () => {
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <Login
                onPressLogin={this.onPressLogin}
            />
        );
    }
}
