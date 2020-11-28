import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { get, reduce } from "lodash";
import {
  TopNavigation,
  TopNavigationAction,
  Text,
  Layout,
  Divider,
} from "@ui-kitten/components";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { parse } from "himalaya";

const Wellfare = () => {
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(true);

  const getURL = () => {
    return "http://equitransylvania.com/wp-json/wp/v2/pages/166";
  };

  useEffect(() => {
    fetch(getURL())
      .then((response) => response.json())
      .then((json) => setArticle(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

  if (loading) {
    return (
      <ActivityIndicator style={{ flex: 1 }} size='large' color='#202833' />
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Layout style={styles.container}>
          <ImageBackground
            style={styles.headerContainer}
            source={{ uri: article.better_featured_image.source_url }}
            blurRadius={1.5}>
            <Text style={styles.headerTitle} category='h3' status='control'>
              {article.title.rendered}
            </Text>
          </ImageBackground>
          <Layout style={styles.contentContainer} level='1'>
            {parse(article.content.rendered).map((e) => {
              if (e.tagName === "h4") {
                return (
                  <Text style={styles.title}>{e.children[0].content}</Text>
                );
              }
              if (e.tagName === "h5") {
                return (
                  <Text style={styles.subTitle}>{e.children[0].content}</Text>
                );
              }
              if (e.tagName === "p") {
                if (e.children[0].tagName === "img") {
                  return (
                    <Image
                      source={{ uri: e.children[0].attributes[2].value }}
                      style={styles.image}
                      resizeMode={"center"}
                    />
                  );
                }

                return (
                  <Text style={styles.articleText}>
                    {e.children[0].content}
                  </Text>
                );
              }

              return;
            })}
          </Layout>
          <Divider />
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    height: 200,
    marginVertical: 20,
  },
  articleText: {
    paddingTop: 10,
  },
  topNavigationText: {
    fontSize: 16,
  },
  backIcon: {
    height: 20,
  },
  headerContainer: {
    alignItems: "center",
    minHeight: 256,
    justifyContent: "center",
  },
  headerTitle: {
    paddingHorizontal: 20,
    marginVertical: 20,
    textAlign: "center",
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

export default Wellfare;
