import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ArticlesList from "../screens/ArticlesList";
import ArticleDetails from "../screens/ArticleDetails";

const { Navigator, Screen } = createStackNavigator();

const ArticlesStackNavigation = ({ route }) => {
  return (
    <Navigator headerMode="none" >
      <Screen
        name="ArticlesList"
        component={ArticlesList}
        initialParams={{ route }}
      />
      <Screen
        name="ArticleDetails"
        component={ArticleDetails}
        options={{ title: "Article Details Screen" }}
      />
    </Navigator>
  );
};

export default ArticlesStackNavigation;
