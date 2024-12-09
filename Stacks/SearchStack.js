import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../Screens/SearchStackScreens/Search';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
