import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Página del curso 1
export default function Curso1() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Curso de React Native</Text>
      <Text style={styles.description}>
        Aprende a crear apps nativas con React Native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#6c757d",
  },
});
