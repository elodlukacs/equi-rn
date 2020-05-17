import React from "react";
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './equi-theme.json';
import { AppTabNavigator } from './components/AppTabNavigator';

// const SettingsScreen = ({ navigation }) => {
// 	return (
// 		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// 			<Text>Contact Page</Text>
// 			<Button
// 				title="Go to Details Screen" onPress={() => navigation.navigate("Details", { otherParam: "Fasz" })}
// 			/>
// 		</View>
// 	);
// };

// const DetailsScreen = ({ route, navigation }) => {
// 	return (
// 		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// 			<Text>Details Screen</Text>
// 			<Text>itemId: {JSON.stringify(route.params.itemId)}</Text>
// 		</View>
// 	);
// };


export default () => (
	<>
		<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
			<AppTabNavigator />
		</ApplicationProvider>
	</>
)
