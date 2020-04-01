import React from 'react';
import Page2 from './page2.js';
import Page3 from './page3.js';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation.js';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Page2">{props => <Page2 />}</Stack.Screen>
        <Stack.Screen name="Page3">{props => <Page3 />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
