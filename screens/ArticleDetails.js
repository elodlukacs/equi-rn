import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { get, reduce } from "lodash";
import { parse } from "himalaya";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 30,
    color: "white",
  },
});

const ArticlesDetails = (props) => {
  const { data } = props.route.params;
  const { width, height } = Dimensions.get("window");

  const avatar = get(
    data,
    "better_featured_image.media_details.sizes.medium_large.source_url",
    "http://equitransylvania.com/wp-content/uploads/2018/03/Kalifa-slider-300x111.jpg"
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <SharedElement
          id={`item.${data.id}.photo`}
          style={StyleSheet.absoluteFill}>
          <Image
            style={{
              width: "100%",
              height: height - 450,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            resizeMode='cover'
            source={{
              uri:
                data.better_featured_image.media_details.sizes.medium_large
                  .source_url,
            }}
          />
        </SharedElement>
        <SharedElement id={`item.${data.id}.text`}>
          <Text style={styles.text}>{data.title.rendered}</Text>
        </SharedElement>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{ backgroundColor: "white", borderRadius: 50 }}>
          <Feather name='arrow-left' size={24} color='black' />
        </TouchableOpacity>
				{/* {
							parse(data.content.rendered).map((e) => {
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
						} */}
      </View>
    </View>
  );
};

export default ArticlesDetails;
