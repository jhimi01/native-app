import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View className="border rounded-full border-primary">
        <Image
          style={styles.image}
          className="rounded-full"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          }}
        />
      </View>
      <Text className="text-5xl font-bold text-brown">Jhimi Talukder</Text>
      <Text className="text-primary text-sm">jhimitalukder235@gmail.com</Text>

      <View className="w-full mt-10 gap-5">
        <TouchableOpacity
          onPress={() => router.push("home/profile/info")}
          className="flex-row justify-between bg-secondary py-5 px-5 w-full rounded-md"
          style={{ elevation: 4 }}
        >
          <View className="flex-row items-end gap-3">
            <Ionicons name="person" size={25} color={"#b3806b"} />
            <Text className="text-2xl text-brown">Personal Information</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={25} color="#b3806b" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row justify-between bg-secondary py-5 px-5 w-full rounded-md"
          style={{ elevation: 4 }}
        >
          <View className="flex-row items-end gap-3">
            <MaterialIcons name="payments" size={25} color="#b3806b" />
            <Text className="text-2xl text-brown">Payment Method</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={25} color="#b3806b" />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row justify-between bg-secondary py-5 px-5 w-full rounded-md"
          style={{ elevation: 4 }}
        >
          <View className="flex-row items-end gap-3">
            <Entypo name="language" size={25} color="#b3806b" />
            <Text className="text-2xl text-brown">Language</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={25} color="#b3806b" />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row justify-between bg-secondary py-5 px-5 w-full rounded-md"
          style={{ elevation: 4 }}
        >
          <View className="flex-row items-end gap-3">
            <FontAwesome name="history" size={25} color="#b3806b" />
            <Text className="text-2xl text-brown">Order History</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={25} color="#b3806b" />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row justify-between bg-secondary py-5 px-5 w-full rounded-md"
          style={{ elevation: 4 }}
        >
          <View className="flex-row items-end gap-3">
            <Entypo name="help-with-circle" size={25} color="#b3806b" />
            <Text className="text-2xl text-brown">Help Center</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={25} color="#b3806b" />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row justify-between bg-secondary py-5 px-5 w-full rounded-md"
          style={{ elevation: 4 }}
        >
          <View className="flex-row items-end gap-3">
            <MaterialCommunityIcons name="logout" size={25} color="#b3806b" />
            <Text className="text-2xl text-brown">Logout</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={25} color="#b3806b" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default ProfileScreen;
