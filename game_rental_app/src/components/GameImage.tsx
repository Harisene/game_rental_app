import React, { useDeferredValue } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SPACER, TOTAL_WIDTH } from '../constants';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';

export interface GameItem {
  id: string;
  source: any;
}

interface Props {
  gameItem: GameItem;
  index: number;
  scrollX: Animated.SharedValue<number>;
}

const GameImage: React.FC<Props> = (props) => {

  if (!props.gameItem.source) {
    return <View style={{ width: SPACER }} />
  }

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(props.scrollX.value,
      [(props.index - 2) * TOTAL_WIDTH, (props.index - 1) * TOTAL_WIDTH, (props.index) * TOTAL_WIDTH],
      [0.9, 1, 0.9],
      Extrapolate.CLAMP)
    const opacity = interpolate(scale, 
      [0.9, 1],
      [0.7, 1],
      Extrapolate.CLAMP)
    return {
      transform: [{ scale }],
      opacity
    }
  }, []);

  return (
    <Animated.Image source={props.gameItem.source} style={[styles.image, rStyle]} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: TOTAL_WIDTH,
    height: 300,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#D1D1D1'
  }
})
export default GameImage;
