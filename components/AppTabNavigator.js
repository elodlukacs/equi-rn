
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import ArticlesStackScreen from "./ArticleStackScreen";
import RidesStackScreen from "./RidesNavigator";
import { FontAwesome5 } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

const HorseIcon = (props) => (
  <FontAwesome5 {...props} name="horse" />
);

const BlogIcon = (props) => (
  <FontAwesome5 {...props} name="book-reader" />
)

const BottomTabBar = ({ navigation, state }) => {

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title='Rides' icon={HorseIcon} />
      <BottomNavigationTab title='Blog' icon={BlogIcon} />
    </BottomNavigation>
  )
};

const BottomTabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Rides' component={ArticlesStackScreen} initialParams={{ screen: 'rides' }} />
    <Screen name='Blog' component={RidesStackScreen} initialParams={{ screen: 'blog' }} />
  </Navigator>
);

export const AppTabNavigator = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
)