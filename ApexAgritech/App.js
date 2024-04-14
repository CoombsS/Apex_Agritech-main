import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddDevice from './screens/AddDevice';
import Signup from './screens/Signup';
import Devices from './screens/Devices';
import Account from './screens/Account';
import FAQ from './screens/FAQ';
import Support from './screens/Support';

import { useState, useEffect } from 'react';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from './components/config';

const Stack = createNativeStackNavigator();
// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="AddDevice" component={AddDevice} />

        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Devices" component={Devices} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4CDEE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    backgroundColor: '#fff',
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 100,
  },
});
