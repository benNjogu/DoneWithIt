import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

function AppPicker({ icon, items, placeHolder, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.appText}>
            {selectedItem ? selectedItem.label : placeHolder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
