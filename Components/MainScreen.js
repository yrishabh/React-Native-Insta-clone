import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {StackNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import LikesTab from './AppTabNavigator/LikesTab';
import SearchTab from './AppTabNavigator/SearchTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';

export default class MainScreen extends React.Component {
    static navigationOptions = {
       //headerLeft: <Icon name="camera" style={{paddingLeft: 10}}/>,
        //title: 'Instagram',
        //headerTitleStyle: {
           // alignSelf: 'center',
           // textAlign: 'center'
         // },
       // headerRight: <Icon name="paper-plane" style={{paddingRight: 10}}/>
       header: null,

    }
  render() {
    return (
      <AppTabNavigator/>
    );
  }
}

const AppTabNavigator = createBottomTabNavigator({
    HomeTab:{
        screen : HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    },
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
