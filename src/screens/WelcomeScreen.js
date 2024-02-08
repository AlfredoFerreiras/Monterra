import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.flex1, { backgroundColor: themeColors.bg }]}>
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>Monterra</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/welcome.png")}
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.alreadyAccountText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "around",
    marginVertical: 16,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  welcomeImage: {
    width: 350,
    height: 350,
  },
  buttonContainer: {
    paddingHorizontal: 28,
    paddingBottom: 8,
  },
  signUpButton: {
    paddingVertical: 12,
    backgroundColor: "#facc15", // Example for yellow-400
    marginHorizontal: 28,
    borderRadius: 30,
    justifyContent: "center",
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4b5563", // Example for gray-700
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  alreadyAccountText: {
    color: "white",
    fontWeight: "600",
  },
  loginText: {
    fontWeight: "600",
    color: "#facc15", // Example for yellow-400
  },
});
