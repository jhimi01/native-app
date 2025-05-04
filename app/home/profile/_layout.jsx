import { Stack } from "expo-router";
import React from "react";

const ProfileLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f5e8d7",
        },
        headerTintColor: "#b3806b",
        headerTitleAlign: "center", // move this outside
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold", // use valid value: 'normal' | 'bold' | '100' ... '900'
        },
        contentStyle: {
          padding: 0,
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="info/index"
        options={{
          title: "Personal Information",
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
