import React, { useState } from "react";
import { TextInput, Text } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen style={{ marginTop: 8 }}>
      <Text>{firstName}</Text>
      <TextInput
        secureTextEntry={true}
        clearButtonMode="always" //ios only
        keyboardType="numeric"
        maxLength={5}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}
