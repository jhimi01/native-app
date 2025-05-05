import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Info = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.avatarContainer}>
        <View className="border rounded-full border-primary">
          <Image
            style={styles.image}
            className="rounded-full"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            }}
          />
        </View>
        <Ionicons
          name="settings"
          size={25}
          color="#999"
          style={styles.lockIcon}
        />
      </View>

      {/* Info Display Fields */}
      <Text style={styles.label} className="text-2xl font-semibold text-brown">
        Name
      </Text>
      <View
        style={styles.field}
        className="bg-secondary py-5 px-5 rounded-md justify-between items-center flex-row"
      >
        <Text style={styles.value} className="text-2xl text-primary">
          Jhimi Talukder
        </Text>
        <Ionicons name="pencil-outline" size={20} color="#333" />
      </View>

      <Text style={styles.label} className="text-2xl font-semibold text-brown">
        Email
      </Text>
      <View
        style={styles.field}
        className="bg-secondary py-5 px-5 rounded-md justify-between items-center flex-row"
      >
        <Text style={styles.value} className="text-2xl text-primary">
          jhimitalukder235@gmail.com
        </Text>
        <Ionicons name="pencil-outline" size={20} color="#333" />
      </View>

      <Text style={styles.label} className="text-2xl font-semibold text-brown">
        Username
      </Text>
      <View
        style={styles.field}
        className="bg-secondary py-5 px-5 rounded-md justify-between items-center flex-row"
      >
        <Text style={styles.value} className="text-2xl text-primary">
          @jhimi
        </Text>
        <Ionicons name="pencil-outline" size={20} color="#333" />
      </View>

      <Text style={styles.label} className="text-2xl font-semibold text-brown">
        Password
      </Text>
      <View style={styles.field} className="bg-secondary py-5 px-5 rounded-md">
        <View style={styles.passwordRow}>
          <Text style={styles.value} className="text-2xl text-primary">
            {showPassword ? "12345678" : "********"}
          </Text>
          <View className="flex-row items-center gap-5">
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#666"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
            <Ionicons name="pencil-outline" size={20} color="#333" />
          </View>
        </View>
      </View>

      <Text style={styles.label} className="text-2xl font-semibold text-brown">
        Phone Number
      </Text>
      <View
        style={styles.field}
        className="bg-secondary py-5 px-5 rounded-md justify-between items-center flex-row"
      >
        <Text style={styles.value} className="text-2xl text-primary">
          +880 1234567890
        </Text>
        <Ionicons name="pencil-outline" size={20} color="#333" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: "#fff",
    flex: 1,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  lockIcon: {
    position: "absolute",
    bottom: 0,
    right: 130,
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 2,
  },
  field: {
    // backgroundColor: "#f1f1f1",
    // borderRadius: 8,
    // padding: 12,
    marginBottom: 15,
    elevation: 4,
  },
  label: {
    // fontSize: 20,
    // color: "#888",
    marginBottom: 4,
  },
  passwordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: 10,
  },
});

export default Info;
