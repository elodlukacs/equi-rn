import React from "react";
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './equi-theme.json';
import { AppTabNavigator } from './components/AppTabNavigator';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => (
	<>
		<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
			<SafeAreaProvider>
				<AppTabNavigator />
			</SafeAreaProvider>
		</ApplicationProvider>
	</>
)
