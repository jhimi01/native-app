import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FavoriteCard = ({ item }) => {
  return (
    <View onPress={() => router.push(`home/items/${item.id}`)} className="bg-secondary px-3 rounded-md relative" style={styles.card}>
      <View className="flex-row items-center flex gap-3">
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: 40, height: 40, borderRadius: 8 }}
        />
        <View>
          <Text className="text-brown text-2xl mr-6">{item?.title}</Text>
          <Text className="text-xl text-primary">${item.price}</Text>
          <Text className="text-sm text-gray-500">
            {item.availabilityStatus}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="bg-primary"
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: 2,
          borderRadius: 3,
        }}
      >
        <Text>
          <FontAwesome name="close" size={15} color={"#f5e8d7"} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    elevation: 4,
    shadowRadius: 2,
    paddingVertical: 10,
  },
});

export default FavoriteCard;
