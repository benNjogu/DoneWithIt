import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function NewListingButton({ onPress }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="plus-circle"
        color={colors.white}
        size={40}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    bottom: 32,
    borderWidth: 10,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default NewListingButton;
