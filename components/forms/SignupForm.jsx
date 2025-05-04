import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Checkbox } from "react-native-paper";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  // const router = useRouter()

  const handleRegister = () => {
    if (!name, !email, !number, !password, !agree) {
      alert("Fill all the gaps carefully");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 charecters.");
      return;
    }
    router.push('/login')
    alert('Registered successfully...')
  };

  return (
    <KeyboardAvoidingView style={styles.form}>
      <View className="w-full">
        <Text
          style={styles.headingtext}
          className="text-4xl text-center text-brown py-4"
        >
          Create your account
        </Text>
        <TextInput
          className="rounded-md"
          style={styles.input}
          placeholder="Type your name"
          keyboardType="name-phone-pad"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          className="rounded-md"
          style={styles.input}
          placeholder="Type your email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          className="rounded-md"
          style={styles.input}
          placeholder="Type your Phone Number"
          keyboardType="number-pad"
          value={number}
          onChangeText={(text) => setNumber(text)}
        />
        <TextInput
          className="rounded-md"
          style={styles.input}
          placeholder="Type your password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* terms & conditions */}
        <Checkbox.Item
          label="I agree with Terms & Conditions"
          status={agree ? "checked" : "unchecked"}
          onPress={() => setAgree(!agree)}
          labelStyle={{ color: "#8B6850" }}
        />
      </View>
      <View>
        <View className="w-full">
          <TouchableOpacity
            onPress={handleRegister}
            className="w-full rounded-md bg-primary text-center py-4  items-center justify-center"
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            className="text-center border-primary text-primary border-b"
            style={{
              marginTop: 40,
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
            marginTop: "25",
          }}
        >
          <Text className="text-primary">{`Don't you have an account?`} </Text>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={styles.button}
            className=""
          >
            <Text className="text-brown text-center font-semibold text-lg">
              Log In
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
  headingtext: {
    // marginBottom: 10
    fontSize: 40,
  },
  input: {
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 15,
    backgroundColor: "#f5e8d7",
    color: "#b3806b",
    fontSize: 18,
  },
  buttonText: {
    color: "#f5e8d7",
    fontSize: 18,
  },
});

export default SignupForm;
