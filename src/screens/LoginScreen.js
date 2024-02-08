import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useAtom } from "jotai";
import { userAtom, authErrorAtom } from "../globalState/userAtom"; // Adjust the path as necessary

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Use Jotai atoms
  const [user, setUser] = useAtom(userAtom);
  const [authError, setAuthError] = useAtom(authErrorAtom);

  const handleSubmit = async () => {
    if (email && password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user); // Update user atom
        setAuthError(""); // Clear any previous error
        navigation.navigate("Home"); // Adjust as needed to navigate to your app's home screen
      } catch (err) {
        console.log("got error: ", err.message);
        setAuthError(err.message); // Update error atom
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { backgroundColor: themeColors.bg }]}>
      <SafeAreaView style={styles.flex}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <ArrowLeftIcon size="20" color="black" />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/login.png")}
            style={styles.loginImage}
          />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>Login</Text>
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
        <View style={styles.signupPrompt}>
          <Text style={styles.signupPromptText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

// Use the same styles object from SignUpScreen but adjust the image style for the login image if needed
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
    padding: 7,
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
  loginImage: {
    width: 165, // Adjust if the login image size is different from the signup image
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
    backgroundColor: "#f3f3f3",
    color: "#4b5563",
    borderRadius: 30,
    marginBottom: 12,
  },
  label: {
    color: "#4b5563",
    marginLeft: 16,
    marginBottom: 4,
  },
  loginButton: {
    padding: 12,
    backgroundColor: "#facc15",
    borderRadius: 25,
    justifyContent: "center",
  },
  loginButtonText: {
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
  signupPrompt: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
  },
  signupPromptText: {
    color: "#6b7280",
    fontWeight: "600",
  },
  signupText: {
    fontWeight: "600",
    color: "#fbbf24",
  },
});
