import { StyleSheet, StatusBar, View, Platform } from "react-native";

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center", //main/primary axis
          alignItems: "center", //secondary axis
        },
      ]}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "absolute",
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
