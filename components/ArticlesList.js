import React, { useEffect, useState } from "react";
import { Image, StyleSheet, ActivityIndicator, View, ImageBackground } from "react-native";
import HTMLView from "react-native-htmlview";
import { get } from "lodash";
import { Layout, Divider, Card, List, Text } from "@ui-kitten/components";
import {RIDES} from "./constants";
import { SafeAreaView } from "react-native-safe-area-context";

const ArticlesList = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const getURL = () => {
    const param = route.params.route.params.screen;
    if (param === RIDES) return "http://equitransylvania.com/wp-json/wp/v2/pages?include=100,174,178,176";

    return "http://equitransylvania.com/wp-json/wp/v2/posts?tags=119";
  }

  useEffect(() => {
    fetch(getURL())
      .then((response) => response.json())
      .then((json) => setArticles(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItemHeader = (headerProps, articles) => {
    return (
      <View {...headerProps} style={styles.itemHeader}>
        <ImageBackground
          source={{ uri: articles.item.better_featured_image.media_details.sizes.medium_large.source_url}}
          style={styles.imageBackground}
        />
      </View>
    )
  };

  const renderItemFooter = (footerProps) => (
    <Text {...footerProps}>
      By Me
    </Text>
  );

  const renderItem = (articles) => (
    <Card
      style={styles.card}
      status='basic'
      header={headerProps => renderItemHeader(headerProps, articles)}
      footer={renderItemFooter}
      onPress={() => navigation.navigate('ArticleDetails', { article: articles.item,  })}
    >
      <Text category='h5' style={styles.itemContent}>
        {articles.item.title.rendered}
      </Text>
      <Text numberOfLines={5}>
        {articles.item.excerpt.rendered.replace(/<\/?[^>]+>/gi, '')}
      </Text>
    </Card>
  );

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.loading} />
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <List
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          data={articles}
          renderItem={renderItem}
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    marginVertical: 20,
  },
  imageBackground: {
    height:220,
  },
  itemHeader: {
    padding:0,
  },
  itemContent: {
    marginVertical: 10,
  },
  loading: {
    flex: 1,
    alignSelf: 'center',
  }
});

export default ArticlesList;
