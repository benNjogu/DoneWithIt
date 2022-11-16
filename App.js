import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native Android</Text>
      <TouchableNativeFeedback onPress={() => console.log("image tapped")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
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
