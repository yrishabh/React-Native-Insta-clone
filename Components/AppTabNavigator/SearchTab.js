import React, {Component} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import {Icon , Container , Content , Header, Thumbnail,Left,Right, Body} from 'native-base';

export default class SearchTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="search" style={{color: tintColor}}/>
        )
    }
  render() {
    return (
        <Container style={styles.container}>
                <Header style={{paddingTop: 25, backgroundColor: '#fff'}}>
                        <Left><Icon name="camera" style={{paddingLeft: 10}} /></Left>
                        <Body><Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}> Search </Text></Body>
                        <Right><Icon name="paper-plane" style={{paddingRight: 10}} /></Right>
                </Header>
                <View style={{ flex: 1,  alignItems: 'center',justifyContent: 'center',}}>
                    <Text> SearchTab</Text>
                </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});