import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.white}>Let's <Text style={styles.blue}>explore</Text> the</Text>
      <Text style={[styles.blue, { marginTop: 6 }]}>GAME <Text style={styles.white}>WORLD</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 24 
  },
  white: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  blue: {
    fontSize: 24,
    color: '#3B57F2',
    fontWeight: 'bold'
  }
})

export default Title;
