import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Game } from '../data';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { TOTAL_WIDTH } from '../constants';

interface Props {
  games: Game[];
  scrollX: Animated.SharedValue<number>;
}

const { width: DEVICE_WIDTH } = Dimensions.get('screen');

const BackgroundImage: React.FC<Props> = (props) => {

  return (
    <View style={styles.container}>
      {props.games.map((game, index) => {
        const rStyle = useAnimatedStyle(() => {
          const opacity = interpolate(props.scrollX.value,
            [(index - 1) * TOTAL_WIDTH, (index) * TOTAL_WIDTH, (index + 1) * TOTAL_WIDTH],
            [0, 1, 0],
            Extrapolate.CLAMP)

          return {
            opacity
          }
        }, []);
        return (
          <Animated.Image
            key={game.id}
            source={game.backgroundImage}
            style={[styles.backgroundImage, rStyle]}
            blurRadius={3}
          />
        )
      })}
      <LinearGradient
        colors={['#0B0B0B', '#939393', '#0B0B0B']}
        locations={[0, 0.8, 0.9]}
        style={styles.linearGradient} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    position: 'absolute',
    width: DEVICE_WIDTH,
    height: '100%'
  },
  blurView: {
    zIndex: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.2
  }
})

export default BackgroundImage;