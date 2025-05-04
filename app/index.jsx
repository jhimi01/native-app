import { router } from "expo-router";
import { View, TouchableOpacity, Image, Text } from "react-native";

export default function Home() {
  return (
    <View className="bg-secondary flex-1 px-2">
      <View className="flex-1 items-center justify-center">
        <TouchableOpacity onPress={() => router.push("/entry")}>
          <Image
            className="w-40 h-40 rounded-full "
            source={require("../assets/images/welcome.jpg")}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/entry")}
        className="w-full bg-primary  rounded-md relative bottom-2 py-4"
      >
        <Text className="text-secondary text-center text-xl">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
