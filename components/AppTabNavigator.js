
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import ArticlesStackScreen from "./ArticleNavigator";
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
      <BottomNavigationTab title='Articles' icon={HorseIcon} />
      <BottomNavigationTab title='Blog' icon={BlogIcon} />
    </BottomNavigation>
  )
};

const BottomTabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Articles' component={ArticlesStackScreen} />
    <Screen name='Blog' component={RidesStackScreen} />
  </Navigator>
);

export const AppTabNavigator = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
)