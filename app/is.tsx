import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

export const Is = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicia Sesión</Text>

      {/* Botón Acceder */}
      <TouchableOpacity style={styles.botonAcceder}>
        <Text style={styles.textoBoton}>Acceder</Text>
      </TouchableOpacity>

      {/* Acceder con Facebook */}
      <TouchableOpacity style={styles.botonAccederSocial}>
        <Image
          style={styles.vector}
          source={{ uri: "https://c.animaapp.com/zndxzfyq/img/vector.svg" }}
        />
        <Text style={styles.textoBotonSocial}>Facebook</Text>
      </TouchableOpacity>

      {/* Acceder con Twitter */}
      <TouchableOpacity style={styles.botonAccederSocial}>
        <Image
          style={styles.union}
          source={{ uri: "https://c.animaapp.com/zndxzfyq/img/union.svg" }}
        />
        <Text style={styles.textoBotonSocial}>Twitter</Text>
      </TouchableOpacity>

      {/* Links adicionales */}
      <Text style={styles.textoOlvidoContraseña}>¿Olvidaste tu contraseña?</Text>

      {/* Link para crear cuenta */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botonAcceder: {
    backgroundColor: "#5d5d5d",
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  textoBoton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  botonAccederSocial: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: "#5d5d5d",
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  vector: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  union: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  textoBotonSocial: {
    color: "#5d5d5d",
    fontSize: 16,
    fontWeight: "600",
  },
  textoOlvidoContraseña: {
    color: "#5d5d5d",
    marginTop: 20,
    fontSize: 16,
  },
  textoCrearCuenta: {
    color: "#b4b4b4",
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: "underline",
  },
});

export default Is;
