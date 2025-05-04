import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const HomeLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false, // 🔥 Removes the top header
          tabBarActiveTintColor: "#b3806b",
          tabBarStyle: {
            backgroundColor: "#f5e8d7",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites/index"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="items/[id]"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </>
  );
};

export default HomeLayout;
