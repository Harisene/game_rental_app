import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icons from 'react-native-vector-icons/Fontisto';

const InputField = () => {
  return (
    <View style={styles.container}>
      <Icons name='search' size={20} color={"#888888"} />
      <TextInput
        style={styles.input}
        placeholder='Search your next game'
        placeholderTextColor={'#888888'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  input: {
    marginLeft: 8,
    fontSize: 16
  }
})

export default InputField
