import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const Card = ({ product }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        <View style={styles.rating}>
          <FontAwesome name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{product.rating}</Text>
        </View>
      </View>

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.subtitle}>with Chocolate</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push(`home/items/${product.id}`)}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "49%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  rating: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 10,
    marginLeft: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
  },
  subtitle: {
    color: "#888",
    fontSize: 12,
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 14,
  },
  addButton: {
    backgroundColor: "#b3806b",
    borderRadius: 10,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Card;
