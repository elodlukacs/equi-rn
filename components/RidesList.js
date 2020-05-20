import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, ActivityIndicator, SafeAreaView } from "react-native";
import HTMLView from "react-native-htmlview";
import { get } from "lodash";
import { TopNavigation, Layout, TopNavigationAction, Divider } from "@ui-kitten/components";

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const RidesList = ({ params }) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  console.log(params);

  useEffect(() => {
    fetch("http://equitransylvania.com/wp-json/wp/v2/pages?include=100,174,178,176")
      .then((response) => response.json())
      .then((json) => setArticles(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" leftControl={BackAction()} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {articles.map((article, i) => {
          const avatar = get(
            article,
            "better_featured_image.media_details.sizes.medium_large.source_url",
            "http://equitransylvania.com/wp-content/uploads/2018/03/Kalifa-slider-300x111.jpg"
          );

          return (
            <Text>{article.title.rendered}</Text>
          );
        })}
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RidesList;