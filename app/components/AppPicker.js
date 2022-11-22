import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import AppText from "./AppText";

function AppPicker({ icon, placeHolder }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.appText}>{placeHolder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={colors.medium}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appText: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.light,
    borderRadius: 24,
    flexDirection: "row",
    width: "100%",
    padding: 16,
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    marginRight: 32,
  },
});

export default AppPicker;
