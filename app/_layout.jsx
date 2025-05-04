import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f5e8d7",
          headerTitleAlign: "center",
        },
        headerTintColor: "#b3806b",
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "condensedBold",
        },
        contentStyle: {
          padding: 0,
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="entry/index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="login/index"
        options={{ title: "Login", headerTitleAlign: "center" }}
      ></Stack.Screen>
      <Stack.Screen
        name="signup"
        options={{ title: "SignUp", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="home"
        // options={{ title: "Home", headerTitleAlign: "center" }}
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
