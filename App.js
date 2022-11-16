import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
