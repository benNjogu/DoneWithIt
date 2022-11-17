import { StyleSheet, StatusBar, View, Platform, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { React } from "react";

export default function App() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          padding: 25,
          paddingHorizontal: 10,
          paddingLeft: 30,
          margin: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      ></View>
    </View>
  );
}
