import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FloatingMusicPlayer from './src/components/FloatingMusicPlayer';
import MainTabNavigator from './src/navigators/MainTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainTabNavigator />
      <FloatingMusicPlayer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
