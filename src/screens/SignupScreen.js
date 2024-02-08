import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log("got error: ", err.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[styles.container, { backgroundColor: themeColors.bg }]}>
      <SafeAreaView style={styles.flex}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/signup.png")}
            style={styles.signupImage}
          />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Enter Email"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Enter Password"
          />
          <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>Or</Text>

        <View style={styles.socialMediaContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/icons/google.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/icons/apple.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/icons/facebook.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.loginPrompt}>
          <Text style={styles.loginPromptText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "start",
    padding: 8,
  },
  backButton: {
    backgroundColor: "#facc15", // Placeholder for yellow-400
    padding: 8,
    borderRadius: 25, // Adjust for a rounded-tr-2xl and rounded-bl-2xl effect
    marginLeft: 16,
    marginTop: 16,
    width: 40, // Added to specify the button width
    height: 40, // Added to specify the button height
    alignItems: "center", // Ensure icon is centered within the button
    justifyContent: "center", // Also ensures icon is centered
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupImage: {
    width: 165,
    height: 110,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingTop: 32,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  form: {
    marginBottom: 8,
  },
  input: {
    padding: 16,
    backgroundColor: "#f3f3f3", // This is a placeholder for bg-gray-100
    color: "#4b5563", // This is a placeholder for text-gray-700
    borderRadius: 30,
    marginBottom: 12,
  },
  label: {
    color: "#4b5563", // This is a placeholder for text-gray-700
    marginLeft: 16,
    marginBottom: 4,
  },
  signUpButton: {
    padding: 12,
    backgroundColor: "#facc15",
    borderRadius: 25,
    justifyContent: "center",
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4b5563",
  },
  orText: {
    fontSize: 20,
    color: "#4b5563",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    spacing: 24,
  },
  socialButton: {
    padding: 8,
    backgroundColor: "#f3f3f3",
    borderRadius: 30,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  loginPrompt: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
  },
  loginPromptText: {
    color: "#6b7280", // This is a placeholder for text-gray-500
    fontWeight: "600",
  },
  loginText: {
    fontWeight: "600",
    color: "#fbbf24", // This is a placeholder for text-yellow-500
  },
});
