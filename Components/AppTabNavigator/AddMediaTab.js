import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon , Container , Content , Header, Thumbnail,Left,Right, Body} from 'native-base';

export default class AddMediaTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="add-circle" style={{color: tintColor}}/>
        )
    }
  render() {
    return (
        <Container style={styles.container}>
                      <Header style={{paddingTop: 25, backgroundColor: '#fff'}}>
                              <Left><Icon name="camera" style={{paddingLeft: 10}} /></Left>
                              <Body><Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}> Add Media </Text></Body>
                              <Right><Icon name="paper-plane" style={{paddingRight: 10}} /></Right>
                      </Header>
                      <View style={{ flex: 1,  alignItems: 'center',justifyContent: 'center',}}>
                          <Text> Add MediaTab</Text>
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
