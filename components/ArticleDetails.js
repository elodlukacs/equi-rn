import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import HTMLView from "react-native-htmlview";
import { get, reduce } from "lodash";
import { TopNavigation, TopNavigationAction, Text, Layout, Divider } from "@ui-kitten/components";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from 'react-native-webview';

const BackIcon = (props) => (
	<FontAwesome5 {...props} size={24} name="chevron-left" />
);

// const BackIcon = (props) => (
//     <Icon {...props} name='arrow-back'/>
// );

const Title = () => (
	<Text style={styles.topNavigationText}>Back</Text>
);

const renderNode = (node, index, siblings, parent, defaultRenderer) => {
  if (node.name == 'h4') {
		console.log(node.children);
    const pHtml = `<p></p>`;
    return (
      <View key={index} style={styles.paragraph}>
        <WebView source={{html: pHtml}} />
      </View>
    );
  }
}

const ArticleDetails = ({ navigation, route }) => {

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
		<SafeAreaView>
			<ScrollView>
				<Layout style={styles.container}>
					<TopNavigation
						accessoryLeft={BackAction}
						title={() => <Title/>}
						style={styles.topNavigation}
					/>
					<ImageBackground
						style={styles.headerContainer}
						source={{ uri: avatar }}
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
						level='1'
					>
						<HTMLView
							value={route.params.article.content.rendered}
							stylesheet={styles}
							renderNode={renderNode}
						/>
						{/* <Text>{route.params.article.content.rendered}</Text> */}
						{/* <WebView source={route.params.article.content.rendered}></WebView> */}
					</Layout>
					<Divider />
				</Layout>
			</ScrollView>
		</SafeAreaView>
	)

};

export default ArticleDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	p: {
		fontSize: 12,
		margin: 0,
		padding: 0,
	},
	paragraph: {
		color: 'red'
	},
	articleText: {
		paddingBottom: 0,
		padding: 0,
		margin: 0,
	},
	topNavigationText: {
		fontSize: 16
	},
	backIcon: {
		height: 20,
		backgroundColor: 'red',
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
