import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ArticlesList from "./ArticlesList";
import ArticleDetails from "./ArticleDetails";
import LogoTitle from './LogoTitle';

const { Navigator, Screen } = createStackNavigator();

const ArticlesStackScreen = ({ route }) => {
  return (
    <Navigator headerMode="none" >
      <Screen
        name="ArticlesList"
        component={ArticlesList}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
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

export default ArticlesStackScreen;
