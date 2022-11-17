import { StyleSheet, StatusBar, View, Platform, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { React } from "react";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "bold",
          color: "tomato",
          textTransform: "capitalize",
          //textDecorationLine: "line-through",
          textAlign: "right",
          lineHeight: 60,
        }}
      >
        I Love React Native! This is my first React Native App.
      </Text>
    </View>
  );
}
