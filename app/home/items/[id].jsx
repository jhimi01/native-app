import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://l.icdbcdn.com/oh/53d6fac5-34ae-48dc-9783-79852170b41d.jpg?w=1040",
        }}
      />
      <View style={styles.content} className="bg-secondary">
      <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <FontAwesome name="star" size={20} color={"#eab308"} />
            <Text className="text-xl text-yellow-500">4.7</Text>
            <Text className="text-gray-500 text-xl">(354)</Text>
          </View>

          <Text className="text-gray-500 text-xl">Stock: 120</Text>
        </View>

        <View className="gap-5">
          <Text className="text-5xl font-bold text-brown">
            Classic Arabica Coffee Beans
          </Text>
          <Text className="text-2xl text-primary">
            Premium Arabica coffee beans sourced from the highlands, delivering
            a rich aroma and smooth flavor for true coffee lovers.
          </Text>
        </View>

        

        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-3xl text-gray-500">Price</Text>
            <Text className="text-4xl text-brown">$12.5</Text>
            <Text className="line-through text-4xl text-primary">$15.99</Text>
          </View>
          <TouchableOpacity className="w-[50%] rounded-md bg-primary py-4">
            <Text className="text-2xl text-secondary font-semibold text-center">
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "50%",
    // borderRadius: 10,
  },
  content: {
    paddingVertical: 35,
    paddingHorizontal: 25,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    gap: 20,
    position: "absolute",
    bottom: 0,
    height: "55%",
    width: "100%",
  },
});

export default ProductDetail;
