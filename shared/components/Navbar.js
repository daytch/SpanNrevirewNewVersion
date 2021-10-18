/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Home, Notification, Profile, Search} from '../../screens';
import {COLORS, icons} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Navbar = ({navigation}) => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: COLORS.gray,
            overflow: 'hidden',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <FastImage
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.disabled,
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <FastImage
                  source={icons.bell_yellow_selected}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    // tintColor: focused ? COLORS.primary : COLORS.disabled
                  }}
                />
              ) : (
                <FastImage
                  source={icons.bell_yellow}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    // tintColor: focused ? COLORS.primary : COLORS.disabled
                  }}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          initialParams={{isFromSearch: false}}
          onp
          options={{
            tabBarIcon: ({focused}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Profile', {
                    isFromSearch: false,
                  })
                }>
                <FastImage
                  source={icons.user_gray}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.primary : COLORS.disabled,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <FastImage
                source={icons.loop}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.disabled,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navbar;
