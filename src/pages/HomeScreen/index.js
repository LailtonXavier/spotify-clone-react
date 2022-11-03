import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons'
import ButtonBeelowGreeting from '../../components/ButtonBeelowGreeting';
import SixRecentPlayLists from '../../components/SixRecentPlayLists';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 15 }}>
      <View style={{ height: 50 }} />
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 26,
              flex: 1
            }}
          >
            Good morning
          </Text>
          <TouchableOpacity>
            <Ionicons
              name='notifications-outline'
              size={24}
              color='white'
            />
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          <TouchableOpacity>
            <AntDesign
              name='clockcircle'
              size={22}
              color='white'
            />
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          <TouchableOpacity>
            <AntDesign
              name='setting'
              size={22}
              color='white'
            />
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
        <ButtonBeelowGreeting />
        <View style={{ height: 20 }} />
        <SixRecentPlayLists />
      </ScrollView>
    </View>
  )
}

export default HomeScreen;
