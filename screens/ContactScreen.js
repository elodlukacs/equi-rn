import React, { useState } from "react";
import { ImageBackground, TextInput, StyleSheet, Text } from "react-native";
import { Layout } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout>
        <ImageBackground
          style={styles.headerContainer}
          source={{
            uri:
              "http://equitransylvania.com/wp-content/uploads/2018/03/Kalifa-slider.jpg",
          }}
          blurRadius={1.5}>
          <Text style={styles.headerTitle} category='h3' status='control'>
            Contact Us
          </Text>
        </ImageBackground>
        <TextInput
          name='email'
          value={email}
          onChange={(text) => setEmail(text)}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
        <TextInput
          name='message'
          value={message}
          onChange={(text) => setMessage(text)}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </Layout>
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

export default Contact;
