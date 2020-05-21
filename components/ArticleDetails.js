import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import HTMLView from "react-native-htmlview";
import { get } from "lodash";
import { Container, Content } from "native-base";
import {TopNavigation, TopNavigationAction, Icon} from "@ui-kitten/components";
import {FontAwesome5} from "@expo/vector-icons";

const BackIcon = (props) => (
    <FontAwesome5 {...props} name="horse" />
);

const ArticleDetails = ({ navigation, route }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
      <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const avatar = get(
    route.params.article,
    "better_featured_image.media_details.sizes.medium_large.source_url",
    "http://equitransylvania.com/wp-content/uploads/2018/03/Kalifa-slider-300x111.jpg"
  );
  console.log(avatar);
  return (
    <Container>
      <Content>
        <TopNavigation title="Article Details" alignment="center" leftControl={BackAction()} />
        <Text>{route.params.article.title.rendered}</Text>
        <Image
          source={{ uri: avatar }}
          style={{ height: 200, width: null, flex: 1 }}
        />
        <HTMLView value={route.params.article.content.rendered.replace(/<\/?[^>]+>/gi, '')} />
      </Content>
    </Container>
  );

};

export default ArticleDetails;

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
