import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, Button, ScrollView, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import TrackScreen from './Screens/TrackScreen';
import GameScreen from './Screens/GameScreen';
const Stack = createNativeStackNavigator();

export default function App() {


    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
          title: 'WelcomeScreen',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="TrackScreen" component={TrackScreen} options={{
          title: 'Track',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="GameScreen" component={GameScreen} options={{
          title: 'Game',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        </Stack.Navigator>
      </NavigationContainer>
        );

    
}

const styles = StyleSheet.create({
   
});
