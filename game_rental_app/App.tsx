/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import BackgroundImage from './src/components/BackgroundImage';
import Title from './src/components/Title';
import InputField from './src/components/InputField';
import ImageGallery from './src/components/ImageGallery';
import DATA from './src/data';
import GameInformation from './src/components/GameInformation';
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

function App() {

  const scrollX = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <BackgroundImage games={DATA} scrollX={scrollX} />
      <Header />
      <Title />
      <InputField />
      <ImageGallery games={DATA} scrollX={scrollX} onScroll={handleScroll} />
      <View style={{ marginTop: 20 }}>
        <GameInformation games={DATA} scrollX={scrollX}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
