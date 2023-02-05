import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreenNavigator, ActivityNavigator } from './components/StackNavigator/StackNavigator';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" options={{
          tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
          component={HomeScreenNavigator} />
        <Tab.Screen
          options={{
            tabBarLabel: 'Updates', tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="update" color={color} size={26} />
            ),
          }}
          name="Settings"
          component={ActivityNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}