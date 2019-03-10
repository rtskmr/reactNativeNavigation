import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
    createBottomTabNavigator,// for tab navigation
} from "react-navigation";

import Login from '../scene/Login';
import Home from '../scene/Home';
import Setting from '../scene/Setting';
import Profile from '../scene/Profile';

const AppStackNavigator = createStackNavigator({
    Home1: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            // headerTitleStyle: navigationTitleHeaderStyle,
            // headerStyle: navigationHeaderStyle,
            // headerTintColor: Steel.core,
        },
    },
    Home2: {
        screen: Home,
        navigationOptions: {
            title: 'Home 2',
            // headerTitleStyle: navigationTitleHeaderStyle,
            // headerStyle: navigationHeaderStyle,
            // headerTintColor: Steel.core,
        },
    },
});

const SettingStackNavigator = createStackNavigator({
    Settings: {
        screen: Setting,
        navigationOptions: {
            title: 'Setting',
        },
    },
});
const ProfileStackNavigator = createStackNavigator({
    Profiles: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
        },
    },
});
const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
    },
});

const TabNavigator = createBottomTabNavigator(
    {
      Home: AppStackNavigator,
      Setting: SettingStackNavigator,
      Profile: ProfileStackNavigator,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
  
          switch (routeName) {
            case 'Home':
              //iconName = 'md-home';
              break;

            case 'Settings':
              //iconName = 'ios-cog';
              break;

            default:
              //iconName = 'ios-cog';
              break;
          }
          //return <Icon name={iconName} size={30} color={tintColor} style={{ marginTop: 5 }} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        // labelStyle: {
        //   fontFamily: Fonts.SourceSansProRegular,
        // },
        style: { marginBottom: 5 },
      },
    },
  );

export default createAppContainer(createSwitchNavigator(
    {
        //App: AppStackNavigator,
        App: TabNavigator,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    },
));
