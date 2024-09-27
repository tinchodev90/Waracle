import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { CatProvider } from './src/context/CatContext';

export default function App() {
  return (
    <CatProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </CatProvider>
  );
}
