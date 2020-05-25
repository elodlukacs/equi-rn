import React, { useEffect, useState } from "react";
import { Image, StyleSheet, ActivityIndicator, SafeAreaView, View, ImageBackground } from "react-native";
import HTMLView from "react-native-htmlview";
import { get } from "lodash";
import { Layout, Divider, Card, List, Text } from "@ui-kitten/components";
import {RIDES} from "./constants";

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
    return <ActivityIndicator />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
  }
});

export default ArticlesList;

// HomeScreen.navigationOptions = {
//   header: null,
// };

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use useful development
//         tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
//   );
// }
