// src/screens/Admin/EmployeeManagement.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmployeeManagement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Management</Text>
      {/* Components to manage employees will go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default EmployeeManagement;
