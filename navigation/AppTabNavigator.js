import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from "@ui-kitten/components";
import ArticlesStackNavigation from "./ArticlesStackNavigation";
import { FontAwesome5 } from "@expo/vector-icons";
import { BLOG, CONTACT, RIDES } from "../components/constants";
import Contact from "../screens/ContactScreen";
import Wellfare from "../screens/Wellfare";

const { Navigator, Screen } = createBottomTabNavigator();

const HorseIcon = (props) => <FontAwesome5 {...props} name='horse' size={24} />;

const BlogIcon = (props) => <FontAwesome5 {...props} name='readme' size={24} />;

const HeartIcon = (props) => <FontAwesome5 {...props} name='heart' size={24} />;

const ContactIcon = (props) => (
  <FontAwesome5 {...props} name='address-card' size={24} />
);

const BottomTabBar = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      appearance='noIndicator'
      style={{ borderTopWidth: 2, borderTopColor: "#ccc" }}>
      <BottomNavigationTab
        title={(evaProps) => <Text {...evaProps}>Rides</Text>}
        icon={HorseIcon}
      />
      <BottomNavigationTab
        title={(evaProps) => <Text {...evaProps}>Blog</Text>}
        icon={BlogIcon}
      />
      <BottomNavigationTab
        title={(evaProps) => <Text {...evaProps}>Wellfare</Text>}
        icon={HeartIcon}
      />
      <BottomNavigationTab
        title={(evaProps) => <Text {...evaProps}>Contact</Text>}
        icon={ContactIcon}
      />
    </BottomNavigation>
  );
};

const BottomTabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen
      name='Rides'
      component={ArticlesStackNavigation}
      initialParams={{ screen: RIDES }}
    />
    <Screen
      name='Blog'
      component={ArticlesStackNavigation}
      initialParams={{ screen: BLOG }}
    />
    <Screen
      name='Wellfare'
      component={Wellfare}
      initialParams={{ screen: BLOG }}
    />
    <Screen
      name='Contact'
      component={Contact}
      initialParams={{ screen: CONTACT }}
    />
  </Navigator>
);

export const AppTabNavigator = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);
