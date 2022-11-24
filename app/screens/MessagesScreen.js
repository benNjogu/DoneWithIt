import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "./../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veritatis sunt ex distinctio temporibus. Quibusdam autem blanditiis, reprehenderit quae error neque?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit debitis, rem minus sint eos corporis labore autem ea quia unde. Ab doloribus, itaque molestiae dolorem quam quaerat repellendus a ipsa repudiandae, obcaecati debitis ullam dolor quod distinctio exercitationem!Atque voluptate, facilis aliquid nobis dolorem tempora recusandae aliquam eius veniam delectus!",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from the message
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: "T4",
              description: "D4",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
