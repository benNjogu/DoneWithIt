import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native Android</Text>
      <Image
        blurRadius={10}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </View>
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
