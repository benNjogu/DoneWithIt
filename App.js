import React, { useState } from "react";
import { TextInput, Text, Switch } from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Funiture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
  { label: "Books", value: 4 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeHolder="Category"
      />
      <AppTextInput icon="email" placeHolder="Email" />
    </Screen>
  );
}
