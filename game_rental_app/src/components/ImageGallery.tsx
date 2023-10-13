import React from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from 'react-native';
import { Game } from '../data';
import GameImage, { GameItem } from './GameImage';
import { TOTAL_WIDTH } from '../constants';
import Animated from 'react-native-reanimated';

interface Props {
  games: Game[];
  scrollX: Animated.SharedValue<number>;
  onScroll: ((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | Animated.SharedValue<((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined> | undefined
}

const ImageGallery: React.FC<Props> = ({ games, onScroll, scrollX }) => {
  return (
    <View>
      <Animated.FlatList
        style={styles.flatListStyle}
        horizontal={true}
        decelerationRate={'fast'}
        onScroll={onScroll}
        snapToInterval={TOTAL_WIDTH}
        scrollEventThrottle={16}
        data={generateData()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id} />
    </View>
  );

  function renderItem({ item, index }: { item: GameItem, index: number }) {
    return <GameImage gameItem={item} index={index} scrollX={scrollX}/>
  }

  function generateData() {
    const data: GameItem[] = [{ id: '-1', source: '' }];
    data.push(...games.map(game => {
      return {
        source: game.image,
        id: game.id
      }
    }))
    data.push({ id: games.length.toString(), source: '' });
    return data;
  }
}

const styles = StyleSheet.create({
  flatListStyle: {
    marginTop: 36
  }
})

export default ImageGallery;
