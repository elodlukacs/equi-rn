import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import HTMLView from "react-native-htmlview";
import { get } from "lodash";
import { Container, Content } from "native-base";

const RideDetails = ({ navigation, route }) => {
	const avatar = get(
		route.params.article,
		"better_featured_image.media_details.sizes.medium_large.source_url",
		"http://equitransylvania.com/wp-content/uploads/2018/03/Kalifa-slider-300x111.jpg"
	);
	console.log(avatar);
	return (
		<Container>
			<Content>
				<Text>{route.params.article.title.rendered}</Text>
				<Image
					source={{ uri: avatar }}
					style={{ height: 200, width: null, flex: 1 }}
				/>
				<HTMLView value={route.params.article.content.rendered} />
			</Content>
		</Container>
	);
};

export default RideDetails;

const styles = StyleSheet.create({
	a: {
		fontWeight: "300",
		color: "green",
		padding: 0,
		margin: 0,
	},
	p: {
		padding: 0,
		margin: 0,
	},
	cardHeader: {
		backgroundColor: "#222a30",
	},
	cardTitle: {
		color: "#fff",
	},
});
