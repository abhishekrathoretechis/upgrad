import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/HomeStackScreens/Home';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
