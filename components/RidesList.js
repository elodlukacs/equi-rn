import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, ActivityIndicator } from "react-native";
import HTMLView from "react-native-htmlview";
import { get } from "lodash";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Right,
  Badge,
} from "native-base";

const RidesList = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "http://equitransylvania.com/wp-json/wp/v2/pages?include=100,174,178,176"
    )
      .then((response) => response.json())
      .then((json) => setArticles(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <Container>
      <Content>
        {articles.map((article, i) => {
          const avatar = get(
            article,
            "better_featured_image.media_details.sizes.medium_large.source_url",
            "http://equitransylvania.com/wp-content/uploads/2018/03/Kalifa-slider-300x111.jpg"
          );

          return (
            <Card key={i}>
              <CardItem
                header
                bordered
                style={styles.cardHeader}
                button
                onPress={() => navigation.navigate("RideDetails", { article })}
              >
                <Body>
                  <Text style={styles.cardTitle}>{article.title.rendered}</Text>
                </Body>
              </CardItem>
              <CardItem
                button
                onPress={() => navigation.navigate("RideDetails", { article })}
                cardBody
              >
                <Image
                  source={{ uri: avatar }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Right>
                  <Badge>
                    <Text>{article.date}</Text>
                  </Badge>
                </Right>
              </CardItem>
            </Card>
          );
        })}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default RidesList;
