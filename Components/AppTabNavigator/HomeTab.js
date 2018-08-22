import React, {Component} from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import {Icon , Container , Content , Header, Thumbnail,Left,Right, Body} from 'native-base';
import CardComponenet from '../CardComponenet';

export default class HomeTab extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="home" style={{color: tintColor}}/>
        )
    }
  render() {
    return (
        <Container style={styles.container}>
            <Header style={{paddingTop: 25, backgroundColor: '#fff'}}>
                <Left><Icon name="camera" style={{paddingLeft: 10}} /></Left>
                <Body><Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}> Instagram </Text></Body>
                <Right><Icon name="paper-plane" style={{paddingRight: 10}} /></Right>
            </Header>
            <Content>
                <View style={{height: 100}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7, paddingTop: 5}}>
                       <View>
                           <Text style={{fontWeight: 'bold'}}>Stories</Text>
                       </View>
                       <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="play" style={{fontSize: 14}}/>
                            <Text style={{fontWeight: 'bold'}}>Watch All</Text>
                       </View>
                    </View>
                    <View style={{ flex: 3}}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                            paddingStart: 5,
                            paddingEnd: 5
                        }}
                        >
                            
                            <Thumbnail 
                            style={{marginHorizontal: 5, borderColor: 'red',borderWidth: 2}}
                            source={require('../../Img/Rishabh.jpg')}/>
                            <Thumbnail 
                            style={{marginHorizontal: 5, borderColor: 'red',borderWidth: 2}}
                            source={require('../../Img/p1.jpg')}/>
                            <Thumbnail 
                            style={{marginHorizontal: 5, borderColor: 'red',borderWidth: 2}}
                            source={require('../../Img/p2.jpg')}/>
                            <Thumbnail 
                            style={{marginHorizontal: 5, borderColor: 'red',borderWidth: 2}}
                            source={require('../../Img/p3.jpeg')}/>
                            <Thumbnail 
                            style={{marginHorizontal: 5, borderColor: 'red',borderWidth: 2}}
                            source={require('../../Img/p4.jpg')}/>
                            <Thumbnail 
                            style={{marginHorizontal: 5, borderColor: 'red',borderWidth: 2}}
                            source={require('../../Img/p5.jpg')}/>
                            <Thumbnail 
                            style={{marginHorizontal: 5, borderColor: 'red',borderWidth: 2}}
                            source={require('../../Img/p6.jpg')}/>
                            <Thumbnail 
                            style={{marginHorizontal: 5, borderColor: 'red',borderWidth: 2}}
                            source={require('../../Img/p7.jpg')}/>

                        </ScrollView>
                    </View>
                </View>
                <CardComponenet imagesSource="1" likes="1.1 M"/> 
                <CardComponenet imagesSource="2" likes="2.5 M"/> 
                <CardComponenet imagesSource="3" likes="3.6 M"/> 
            </Content>
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