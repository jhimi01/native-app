import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import itemStore from "../store/itemStore";
import Card from "../../components/cards/Card";

const HomeScreen = () => {
  const store = itemStore();
  const { items, fetchData } = store;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <Text className="italic text-primary" style={styles.header}>
            Find your favorite drink and enjoy ☕
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginVertical: 20,
            }}
            className="w-full"
          >
            <TextInput
              placeholder="Search your drink"
              className=" border border-primary px-3 rounded-md text-brown flex-1 py-4 text-xl"
            />
            <TouchableOpacity className="bg-primary p-4 rounded-md">
              <Text className="text-secondary">
                <FontAwesome name="search" size={24} color="#f5e8d7" />
              </Text>
            </TouchableOpacity>
          </View>
        </>
      }
      data={items}
      renderItem={({ item }) => <Card product={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    fontSize: 35,
    width: 280,
  },
});

export default HomeScreen;
