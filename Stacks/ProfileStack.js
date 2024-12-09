import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../Screens/ProfileStackScreens/Profile';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
