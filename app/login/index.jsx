// import { Text, View, TextInput } from "react-native";
import LoginForm from "../../components/forms/LoginForm";
import {
  View,
} from "react-native";

const LoginScreen = () => {
  return (
    <View>
      {/* <Text>this is a react projet</Text> */}
      <LoginForm />
        {/* <KeyboardAvoidingView
            
          >
            <Text>Welcome back!</Text>
            <View className="flex-1 justify-between items-center">
              <View className="w-full">
                <TextInput
                  placeholder="email"
                  keyboardType="email-address"
                  className="border-b border-primary w-full text-brown"
                />
                <TextInput
                  placeholder="password"
                  keyboardType="visible-password"
                  className="border-b border-primary w-full text-brown"
                />
              </View>
      
              <TouchableOpacity className="flex-1 bg-primary rounded-full py-4">
                <Text className="text-2xl text-secondary font-semibold text-center">
                  Log In
                </Text>
              </TouchableOpacity>
              <Text className="underline text-secondary text-sm text-end">
                Forget Password
              </Text>
            </View>
          </KeyboardAvoidingView> */}
    </View>
  );
};

export default LoginScreen;
