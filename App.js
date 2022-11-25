import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert("You need to enable permissions to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <AppText>Hello</AppText>
    </Screen>
  );
}
