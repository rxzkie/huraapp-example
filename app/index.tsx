import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from "react-native";

// Página principal que muestra un solo curso
export default function Index() {
  const [cursos, setCursos] = useState([
    {
      id: "1",
      titulo: "Curso de React Native",
      descripcion: "Aprende a crear apps nativas con React Native.",
    },
  ]);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoCurso, setNuevoCurso] = useState({ titulo: "", descripcion: "" });

  const agregarCurso = () => {
    if (nuevoCurso.titulo && nuevoCurso.descripcion) {
      setCursos((prevCursos) => [
        ...prevCursos,
        {
          id: String(prevCursos.length + 1), // Genera un ID basado en el número actual de cursos
          ...nuevoCurso,
        },
      ]);
      setNuevoCurso({ titulo: "", descripcion: "" }); // Reinicia el formulario
      setModalVisible(false); // Cierra el modal
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Cursos</Text>

      {/* Mostrar la lista de cursos */}
      {cursos.map((curso) => (
        <View key={curso.id} style={styles.curso}>
          {/* Solo el primer curso tendrá un título en enlace */}
          {curso.id === "1" ? (
            <Text style={styles.cursoTitulo}>{curso.titulo}</Text>
          ) : (
            <Text style={styles.cursoTitulo}>{curso.titulo} (sin enlace)</Text>
          )}
          <Text>{curso.descripcion}</Text>
        </View>
      ))}

      {/* Botón para agregar un nuevo curso */}
      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.botonAgregarTexto}>Agregar Curso</Text>
      </TouchableOpacity>

      {/* Modal para agregar un nuevo curso */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Agregar Curso</Text>
            <TextInput
              style={styles.input}
              placeholder="Título del curso"
              value={nuevoCurso.titulo}
              onChangeText={(text) => setNuevoCurso({ ...nuevoCurso, titulo: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Descripción del curso"
              value={nuevoCurso.descripcion}
              onChangeText={(text) => setNuevoCurso({ ...nuevoCurso, descripcion: text })}
            />
            <Button title="Agregar" onPress={agregarCurso} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  curso: {
    backgroundColor: "#e9ecef",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: "90%",
  },
  cursoTitulo: {
    fontSize: 18,
    color: "#343a40",
    fontWeight: "bold",
  },
  botonAgregar: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  botonAgregarTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
