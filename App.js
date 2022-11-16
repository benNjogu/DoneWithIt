import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  StatusBar,
  Dimensions,
  View,
  Platform,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
        }}
      ></View>
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
