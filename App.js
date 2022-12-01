import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Button, View } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
  const netInfo = useNetInfo();

  return (
    <View style={{ marginTop: 20 }}>
      <Button title="Net" disabled={!netInfo.isInternetReachable} />
    </View>
  );
}
