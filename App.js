import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen style={{ marginTop: 8 }}>
      <AppTextInput icon={"email"} placeHolder="UserName" />
    </Screen>
  );
}
