import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../components/ArticlesList";
import ArticleDetails from "../components/ArticleDetails";

const ArticlesStack = createStackNavigator();

const ArticlesStackScreen = () => (
  <ArticlesStack.Navigator>
    <ArticlesStack.Screen name="HomeScreen" component={HomeScreen} />
    <ArticlesStack.Screen name="ArticleDetails" component={ArticleDetails} />
  </ArticlesStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ArticlesStackScreen />
  </NavigationContainer>
);
