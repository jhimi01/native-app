import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

const EntryScreen = () => {
  return (
    <View className="flex flex-1 items-center px-5 justify-between">
      <View className="relative">
        <Image source={require("../../assets/images/coffee.png")} />
      </View>

      <View className="w-full py-5">
      <Text
        className="text-3xl my-5 italic capitalize text-center text-brown"
        styles={{ fontFamily: "" }}
      >
        Get the best coffee in Town
      </Text>
        <View className="flex-row gap-3 mb-3 justify-between">
          <TouchableOpacity
            onPress={() => router.push("/signup")}
            className="flex-1 rounded-md bg-primary py-4"
          >
            <Text className="text-2xl text-secondary font-semibold text-center">
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="flex-1 rounded-md bg-primary py-4"
          >
            <Text className="text-2xl text-secondary font-semibold text-center">
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/home")}
          className="w-full border-primary border rounded-md py-4"
        >
          <Text className="text-2xl  text-primary font-semibold text-center">
            Entry as a guest
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EntryScreen;
