import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import ArticlesList from "./screens/ArticlesList";
import ArticlesDetails from "./screens/ArticleDetails";

const Stack = createSharedElementStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='List'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='ArticlesList' component={ArticlesList} />
        <Stack.Screen
          name='ArticlesDetails'
          component={ArticlesDetails}
          options={(navigation) => ({
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
          sharedElementsConfig={(route) => {
            const { data } = route.params;
            console.log("FASSZ", data);
            return [
              {
                id: `item.${data.id}.photo`,
                animation: "move",
                resize: "clip",
                align: "center-top",
              },
              {
                id: `item.${data.id}.text`,
                animation: "fade",
                resize: "clip",
                align: "left-center",
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
