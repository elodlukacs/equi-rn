import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import TouchableScale from "react-native-touchable-scale";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
  caption: {
    fontSize: 20,
    opacity: 0.5,
  },
  image: {
    width: 200,
    height: 160,
    resizeMode: "contain",
  },
});

const ArticlesList = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const getURL = () => {
  //   const param = route.params.route.params.screen;
  //   if (param === RIDES)
  //     return "http://equitransylvania.com/wp-json/wp/v2/pages?include=100,174,178,176";

    return "http://equitransylvania.com/wp-json/wp/v2/posts?tags=119";
  };

  useEffect(() => {
    fetch(getURL())
      .then((response) => response.json())
      .then((json) => setArticles(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={articles}
        // keyExtractor={(item) => item.id}
        style={{ paddingHorizontal: 30 }}
        renderItem={({item}) => {
          return (
            <TouchableScale
              style={styles.flex}
              activeScale={0.9}
              tension={50}
              friction={7}
              useNativeDriver
              onPress={() => navigation.navigate("ArticlesDetails", { data: item })}>
              <View style={styles.container}>
                <SharedElement id={`item.${item.id}.photo`}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.better_featured_image.media_details.sizes
                      .medium_large.source_url
                    }}
                  />
                </SharedElement>
                <SharedElement id={`item.${item.id}.text`}>
                  <Text style={styles.text}>{item.title.rendered}</Text>
                </SharedElement>
                  <Text style={styles.caption}>{item.excerpt.rendered.replace(/<\/?[^>]+>/gi, "")}</Text>
              </View>
            </TouchableScale>
          );
        }}
      />
    </View>
  );
};

export default ArticlesList;