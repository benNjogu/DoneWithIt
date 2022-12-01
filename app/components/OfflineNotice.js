import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../../config/colors";
import AppText from "./AppText";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    elevation: 1,
    justifyContent: "center",
    height: 50,
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
