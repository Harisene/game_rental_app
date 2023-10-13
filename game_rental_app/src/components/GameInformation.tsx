import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Game } from '../data';
import GamePlatforms from './GamePlatforms';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { TOTAL_WIDTH } from '../constants';

interface Props {
  games: Game[];
  scrollX: Animated.SharedValue<number>;
}

const { width: DEVICE_WIDTH } = Dimensions.get('screen');

const GameInformation: React.FC<Props> = ({ games, scrollX }) => {

  return (
    <View style={styles.container}>
      {games.map((game, index) => {

        const rStyle = useAnimatedStyle(() => {
          const opacity = interpolate(scrollX.value,
            [(index - 1) * TOTAL_WIDTH, (index) * TOTAL_WIDTH, (index + 1) * TOTAL_WIDTH],
            [0, 1, 0],
            Extrapolate.CLAMP)
          const transY = interpolate(opacity,
            [0, 1],
            [70, 0],
            Extrapolate.CLAMP)
          return {
            opacity,
            transform: [{ translateY: transY }]
          }
        }, []);

        return (
          <Animated.View style={[styles.infoContainer, rStyle]} key={game.id}>
            <Text style={styles.name}>{game.name}</Text>
            <View style={{ marginTop: 10 }}>
              <GamePlatforms platforms={game.platforms} />
            </View>
            <Text style={styles.description}>{game.description}</Text>
            <View style={styles.bottomContainer}>
              <View style={styles.buttonContainer}>
                <View style={styles.cartButton}>
                  <Icons name='cart' size={30} color={'white'} />
                </View>
                <View style={styles.heartButton}>
                  <Icons name='heart' size={30} color={'white'} />
                </View>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{game.price}</Text>
              </View>
            </View>
          </Animated.View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoContainer: {
    position: 'absolute',
    paddingHorizontal: 40,
    width: DEVICE_WIDTH
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
  },
  description: {
    marginTop: 10,
    color: 'white',
    fontSize: 14,
  },
  bottomContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1
  },
  cartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000B5',
    width: 57,
    height: 44,
    borderRadius: 6
  },
  heartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A3A3A3',
    width: 57,
    height: 44,
    borderRadius: 6,
    marginLeft: 16
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  price: {
    color: '#13A300',
    fontWeight: 'bold',
    fontSize: 24
  }
})

export default GameInformation;
  // <Animated.FlatList
    //   ref={flatListRef}
    //   contentContainerStyle={{ width: DEVICE_WIDTH, backgroundColor: 'red' }}
    //   horizontal={true}
    //   decelerationRate={'fast'}
    //   snapToInterval={TOTAL_WIDTH}
    //   onScroll={onScroll}
    //   scrollEventThrottle={16}
    //   data={games}
    //   renderItem={renderItem}
    //   showsHorizontalScrollIndicator={false}
    //   keyExtractor={(item) => item.id} />