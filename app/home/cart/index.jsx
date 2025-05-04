import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import itemStore from "../../store/itemStore";
import { useEffect } from "react";
import FavoriteCard from "../../../components/cards/FavoriteCard";

const Favorites = () => {
  const store = itemStore();
  const { items, fetchData } = store;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        style={styles.container}
        ListHeaderComponent={
          <>
            <Text className="italic text-primary mb-6" style={styles.header}>
              Your Coffee Cart ☕
            </Text>
          </>
        }
        data={items.slice(0, 5)}
        renderItem={({ item }) => <FavoriteCard item={item} />}
        ListFooterComponent={
          <View
            style={{ elevation: 4 }}
            className="bg-secondary rounded-md py-5 mt-5 mb-10 px-5 gap-3"
          >
            <View className="gap-3 border-b border-primary pb-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-primary text-2xl">Cart total</Text>
                <Text className="text-brown text-2xl font-medium">$44.96</Text>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="text-primary text-2xl">Tax</Text>
                <Text className="text-brown text-2xl font-medium">$54</Text>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="text-primary text-2xl">Delivery</Text>
                <Text className="text-brown text-2xl font-medium">$5.87</Text>
              </View>
            </View>

            <View className="flex flex-row pt3 items-center justify-between">
              <Text className="text-primary text-3xl">Subtotal</Text>
              <Text className="text-brown text-3xl font-semibold">$104.83</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              className="bg-primary py-4 items-center rounded-md mt-3 justify-center"
            >
              <Text className="text-white text-center font-semibold text-xl">
                Procced to checkout
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    fontSize: 35,
    width: 280,
  },
});

export default Favorites;
