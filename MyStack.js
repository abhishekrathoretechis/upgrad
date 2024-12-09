import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Slider from './Screens/SliderScreens/Slider';
import BottomTabNavigator from './BottomTabNavigator';
import IntroductionScreen from './Screens/SliderScreens/IntroductionScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="IntroductionScreen">
      <Stack.Screen
        name="Slider"
        component={Slider}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroductionScreen"
        component={IntroductionScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
