import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

const ButtonBeelowGreeting = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          marginRight: 10,
          paddingHorizontal: 15,
          backgroundColor: '#333',
          borderRadius: 999

        }}
      >
        <Text style={{ color: 'white' }}>Music</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          marginRight: 10,
          paddingHorizontal: 15,
          backgroundColor: '#333',
          borderRadius: 999

        }}
      >
        <Text style={{ color: 'white' }}>Podcast & Shows</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBeelowGreeting;