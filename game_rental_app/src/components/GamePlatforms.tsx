import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface Props {
  platforms: string[]
}

const GamePlatforms: React.FC<Props> = ({ platforms }) => {
  return <View style={styles.container}>
    {
      platforms.map(platform => {
        let textColor;
        let backgroundColor;
        switch (platform) {
          case 'PS5':
            textColor = '#000';
            backgroundColor = '#fff';
            break;
          case 'PS4':
            textColor = '#fff';
            backgroundColor = '#0A68FF'
            break;
          case 'PC':
            textColor = '#fff';
            backgroundColor = '#656565'
            break;
        }

        return (
          <View style={[styles.platformContainer, { backgroundColor }]} key={platform}>
            <Text style={[styles.text, { color: textColor }]}>{platform}</Text>
          </View>
        )
      })
    }
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  platformContainer: {
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 14,
    marginRight: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14
  }
})

export default GamePlatforms;
