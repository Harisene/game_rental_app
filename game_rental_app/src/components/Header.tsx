import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={require('../assets/profile.png')} />
        <Text style={styles.text}>Hi,</Text>
        <Text style={styles.name}>CeylonIQApps!</Text>
      </View>
      <View style={styles.bellContainer}>
        <View style={styles.badge}/>
        <Icon name='bell' size={30} color={'white'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 60
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white'
  },
  name: {
    marginLeft: 4,
    fontSize: 20,
    color: '#3B57F2',
    fontWeight: '700'
  },
  bellContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 0,
    backgroundColor: '#FF0000',
    width: 8,
    height: 8,
    borderRadius: 4
  }
})

export default Header;