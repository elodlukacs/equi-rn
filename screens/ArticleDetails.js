import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import { get, reduce } from "lodash";
import { TopNavigation, TopNavigationAction, Text, Layout, Divider } from "@ui-kitten/components";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { parse } from 'himalaya';

const BackIcon = (props) => (
	<FontAwesome5 {...props} size={24} name="chevron-left" />
);

// const BackIcon = (props) => (
//     <Icon {...props} name='arrow-back'/>
// );

const Title = () => (
	<Text style={styles.topNavigationText}>Back</Text>
);

const ArticleDetails = ({ navigation, route }) => {

	const [articleContent, setArticleContent] = useState('');

	useEffect(()=> {
		setArticleContent(route.params.article.content.rendered);
	}, [])

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
						{
							parse(articleContent).map((e) => {
								if (e.tagName === 'h4') {
									return <Text style={styles.title}>{e.children[0].content}</Text>
								}
								if (e.tagName === 'h5') {
									return <Text style={styles.subTitle}>{e.children[0].content}</Text>
								}
								if (e.tagName === 'p') {

									if (e.children[0].tagName === 'img') {
										return <Image source={{uri: e.children[0].attributes[2].value}} style={styles.image}
										resizeMode={'center'} />
									}

									return <Text style={styles.articleText}>{e.children[0].content}</Text>
								}

								return
							})
						}
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
		flex: 1,
	},
	title: {
		fontSize: 24,
		marginVertical: 10,
	},
	subTitle: {
		fontSize: 20,
		marginVertical: 10,
	},
	image: {
		height:200,
		marginVertical: 20,
	},
	articleText: {
		paddingTop: 10,
	},
	topNavigationText: {
		fontSize: 16
	},
	backIcon: {
		height: 20,
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
