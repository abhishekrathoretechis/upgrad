import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Like from '../Screens/LikeStackScreens/Like';

const Stack = createStackNavigator();

function LikeStack() {
  return (
    <Stack.Navigator initialRouteName="Like">
      <Stack.Screen
        name="Like"
        component={Like}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default LikeStack;
