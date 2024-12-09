import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import HomeStack from './Stacks/HomeStack';
import SearchStack from './Stacks/SearchStack';
import LikeStack from './Stacks/LikeStack';
import ProfileStack from './Stacks/ProfileStack';

const Tab = createBottomTabNavigator();

function BottomTabNavigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#3BA1FB',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#ECECEC',
        tabBarInactiveBackgroundColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
        lazy: true, // Keep lazy loading for better performance
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assests/images/homeselected.png') // Path to selected state image
                  : require('./assests/images/home.png') // Path to unselected state image
              }
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={LikeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assests/images/heartselected.png')
                  : require('./assests/images/heart.png')
              }
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assests/images/searchselected.png')
                  : require('./assests/images/search.png')
              }
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./assests/images/profileselected.png')
                  : require('./assests/images/profile.png')
              }
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
