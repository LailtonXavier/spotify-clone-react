import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import HomeScreen from '../pages/HomeScreen';
import LibraryScreen from '../pages/LibraryScreen';
import SearchScreen from '../pages/SearchScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // title n mostra 
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
          borderTopWidth: 0,
          bottom: 5,
          paddingHorizontal: 45, // faca o teste para ver funcionando (ML e MR)
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'md-home' : 'md-home-outline'}
              size={24}
              color={color}
            />
          ),
          tabBarInactiveTintColor: '#fffa',
          tabBarActiveTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name='search'
              size={24}
              color={color}
            />
          ),
          tabBarInactiveTintColor: '#fffa',
          tabBarActiveTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'library' : 'library-outline'}
              size={24}
              color={color}
            />
          ),
          tabBarInactiveTintColor: '#fffa',
          tabBarActiveTintColor: '#fff',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator;