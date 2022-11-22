import React, { useState } from "react";
import { TextInput, Text, Switch } from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <AppPicker icon="apps" placeHolder="Category" />
      <AppTextInput icon="email" placeHolder="Email" />
    </Screen>
  );
}
