// src/screens/Admin/ScheduleManagement.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Schedule = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Management</Text>
      {/* Schedule management functionality will go here */}
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

export default Schedule;
