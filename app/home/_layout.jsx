import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const HomeLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
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
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={`${focused ? "home" : "home-outline"}`}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart/index"
          options={{
            title: "Cart Items",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={`${focused ? "cart" : "cart-outline"}`}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={`${focused ? "person" : "person-outline"}`}
                size={size}
                color={color}
              />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="info/index"
          options={{
            title: "Personal Information",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={`${focused ? "person" : "person-outline"}`}
                size={size}
                color={color}
              />
            ),
          }}
          options={{
            href: null,
          }}
        /> */}
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
