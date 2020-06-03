import React, {useEffect, useState} from "react";
import {Image, StyleSheet, View, SafeAreaView, ImageBackground} from "react-native";
import HTMLView from "react-native-htmlview";
import {get} from "lodash";
import {Container, Content} from "native-base";
import {TopNavigation, TopNavigationAction, Text, Layout, Divider} from "@ui-kitten/components";
import {FontAwesome5} from "@expo/vector-icons";

const BackIcon = (props) => (
	<FontAwesome5 {...props} name="chevron-left"/>
);

// const BackIcon = (props) => (
//     <Icon {...props} name='arrow-back'/>
// );

const ArticleDetails = ({navigation, route}) => {

	const BackAction = () => (
		<TopNavigationAction
			icon={BackIcon}
			onPress={() => navigation.goBack()}
		/>
	);

	const avatar = get(
		route.params.article,
		"better_featured_image.media_details.sizes.medium_large.source_url",
		"http://equitransylvania.com/wp-content/uploads/2018/03/Kalifa-slider-300x111.jpg"
	);

	return (
		<Layout style={styles.container}>
			<TopNavigation
				accessoryLeft={BackAction}
				title="Lofasz"
				style={styles.topNavigation}
			/>
			<ImageBackground
				style={styles.headerContainer}
				source={{uri: avatar}}
				blurRadius={1.5}
			>
				<Text
					style={styles.headerTitle}
					category='h3'
					status='control'>
					{route.params.article.title.rendered}
				</Text>
			</ImageBackground>
			<Layout
				style={styles.contentContainer}
				level='1'>
				<HTMLView
					value={route.params.article.content.rendered}
					stylesheet={styles}
				/>
			</Layout>
			<Divider/>
		</Layout>
	)

};

export default ArticleDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	topNavigation: {
		minHeight: 80,
	},
	headerContainer: {
		alignItems: 'center',
		minHeight: 256,
		justifyContent: "center"
	},
	headerTitle: {
		paddingHorizontal: 20,
		marginVertical: 20,
		textAlign: 'center',
		zIndex: 1,
	},
	headerDescription: {
		zIndex: 1,
	},
	contentContainer: {
		flex: 1,
		padding: 24,
	},
});
