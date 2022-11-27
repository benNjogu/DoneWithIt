import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";

function RegisterScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Register</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
  },
});

export default RegisterScreen;
