import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text clicked");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native Android - A really long text. This should be even
        longer for the observation to be made effectively
      </Text>
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
