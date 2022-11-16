import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Button
        color={"orange"}
        title="Click Me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
