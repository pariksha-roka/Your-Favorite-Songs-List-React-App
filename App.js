// import { StatusBar } from 'expo-sta/tus-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

// View - map to UI View or an Android View
export default function App() {
  // to handle the lengthy text
  const handlePress = () => console.log("Text is Pressed!");

  // require function return the number that is reference to our image
  // console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native App!
      </Text>

      <Button
        color="green"
        title="Click Me"
        onPress={() => console.log("Button Clicked")}
      />

      <TouchableWithoutFeedback onPress={() => console.log("Image Clicked")}>
        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// IMAGES
// to change any image with view instead of image
// <View style={{ width: 200, height: 70, backgroundColor: "#fff"}}
