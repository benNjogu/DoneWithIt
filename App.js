import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native Android</Text>
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
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
