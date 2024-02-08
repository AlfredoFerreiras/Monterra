import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Home Page - </Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Flex direction set to row to align children in a row
    justifyContent: "center", // Horizontally center the content
    alignItems: "center", // Vertically center the content
  },
  pageTitle: {
    fontSize: 18, // Corresponds to Tailwind's text-lg
    color: "#000", // Default text color
  },
  logoutButton: {
    padding: 8, // Corresponds to Tailwind's p-1 (approximation)
    backgroundColor: "#f87171", // Tailwind bg-red-400
    borderRadius: 8, // Rounded-lg in Tailwind
    marginLeft: 10, // Added to give some space between the text and the button
  },
  logoutButtonText: {
    color: "#fff", // Tailwind text-white
    fontSize: 18, // Tailwind text-lg
    fontWeight: "bold", // Tailwind font-bold
  },
});
