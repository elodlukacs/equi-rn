import React from "react";
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './equi-theme.json';
import { AppTabNavigator } from './components/AppTabNavigator';

export default () => (
	<>
		<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
			<AppTabNavigator />
		</ApplicationProvider>
	</>
)
