// src/screens/Admin/ServiceManagement.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ServiceManagement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Management</Text>
      {/* Service management functionality will go here */}
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

export default ServiceManagement;
