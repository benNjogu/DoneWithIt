import { StyleSheet, StatusBar, View, Platform, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { React } from "react";

import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I Love React Native!</AppText>
    </View>
  );
}
