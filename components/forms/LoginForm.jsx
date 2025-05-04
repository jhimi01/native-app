import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email && !password) {
      alert("invalid input fields");
      return;
    }

    alert(`logged in with ${email}`);
  };

  return (
    <KeyboardAvoidingView style={styles.form}>
      <View className="w-full">
        <Text
          style={styles.headingtext}
          className="text-4xl text-center text-brown py-4" >
          Welcome back!
        </Text>
        <TextInput
          className="rounded-md"
          style={styles.input}
          placeholder="Type your email"
          keyboardType="email-address"
          value={email}
          onChange={() => setEmail()}
        />
        <TextInput
          className="rounded-md"
          style={styles.input}
          placeholder="Type your password"
          secureTextEntry
          value={password}
          onChange={() => setPassword()}
        />
      </View>

      <View className="">
        <Text
          style={{ textAlign: "right" }}
          className="text-left text-primary underline mb-3 text-sm"
        >
          Forgot Password?
        </Text>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
          className="bg-primary py-4 items-center rounded-md justify-center"
        >
          <Text
            style={styles.buttonText}
            className="text-white text-center font-semibold text-lg"
          >
            Log In
          </Text>
        </TouchableOpacity>

        <View>
          <Text
            className="text-center border-primary text-primary border-b"
            style={{
              marginTop: 20,
              marginBottom: 15,
              paddingVertical: 15,
            }}
          >
            Or Sign Up with
          </Text>
          <View className="flex-row justify-center gap-3 space-x-8 mt-4">
            {/* Google */}
            <TouchableOpacity className="p-4 rounded-full">
              <AntDesign name="google" size={24} color="#8B6850" />
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity className="p-4 rounded-full">
              <FontAwesome name="facebook" size={24} color="#8B6850" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text className="text-primary">Are you new here? </Text>
          <TouchableOpacity
            onPress={() => router.push("/signup")}
            style={styles.button}
            className=""
          >
            <Text className="text-brown text-center font-semibold text-lg">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 17,
    paddingVertical: 20,
    // gap: 40,
  },
  input: {
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 15,
    backgroundColor: "#f5e8d7",
    fontSize : 18
  },
  headingtext: {
    // marginBottom: 10
    fontSize: 40,
  },
  buttonText: {
    color: "#f5e8d7",
    fontSize : 18
  },
});

export default LoginForm;
