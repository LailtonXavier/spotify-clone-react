import React, { useState } from 'react';
import { Easing, Image, Text, TouchableOpacity, View } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const FloatingMusicPlayer = () => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={{
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      right: 20,
      left: 20,
      bottom: 65,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#555'
    }}>
      <Image
        source={{ uri: 'https://unsplash.it/150' }}
        style={{
          aspectRatio: 1,
          width: 40,
          borderRadius: 5
        }}
      />
      <View style={{ flex: 1, marginHorizontal: 10, paddingBottom: 2 }}>
        <TextTicker
          style={{ color: 'white', fontWeight: '700' }}
          duration={10000}
          easing={Easing.linear}
          repeatSpacer={80}
          marqueeDelay={1000}
          loop
        >
          A very Long Title A very Long Title  A very Long Title A very Long Title A very Long Title 
        </TextTicker>
        <TextTicker
          style={{ color: 'white', fontWeight: '400' }}
          duration={10000}
          easing={Easing.linear}
          repeatSpacer={80}
          marqueeDelay={1000}
          loop
        >
          A very Long Artist 
        </TextTicker>
      </View>
      <TouchableOpacity onPress={() => setLiked(!liked)}>
        {
          liked ?
          <AntDesign name='heart' size={24} color='#1ED760' />
          :
          <AntDesign name='hearto' size={24} color='#fff' />
        }
      </TouchableOpacity>
      <View style={{width: 16}} />
      <TouchableOpacity>
        <FontAwesome5 name='play' size={20} color='white' />
      </TouchableOpacity>
      <View style={{width: 8}} />
    </View>
  )
}

export default FloatingMusicPlayer;
