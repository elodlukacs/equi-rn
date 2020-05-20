import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RidesList from "./RidesList";
import RideDetails from "./RideDetails";
import LogoTitle from './LogoTitle';

const { Navigator, Screen } = createStackNavigator();

const RidesStackScreen = ({ route }) => {
  console.log(route.params);
  return (
    <Navigator headerMode="none" >
      <Screen
        name="RidesList"
        component={RidesList}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Screen
        name="RideDetails"
        component={RideDetails}
        options={{ title: "Ride Details Screen" }}
      />
    </Navigator>
  );
};

export default RidesStackScreen;
