import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native'

const SixRecentPlayLists = () => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 10,
          borderRadius: 5,
          backgroundColor: '#333',
          alignItems: 'center',
          width: (Dimensions.get('screen').width )- 40
        }}
      >
        <Image
          source={{
            uri: `https://unsplash.it/150?random=${Math.random()}`
          }}
          style={{
            aspectRatio: 1,
            width: 50
          }}
        />
        <Text style={{ color: 'white', marginLeft: 5 }}>Lofi study beats</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SixRecentPlayLists;