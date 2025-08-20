import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Input y botón */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>AÑADIR</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de tareas */}
      <ScrollView style={styles.tasksContainer}>
        <View style={styles.task}>
          <Text style={styles.taskText}>Tarea 1</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Tarea 2</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Tarea 3</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tasksContainer: {
    flex: 1,
  },
  task: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    color: 'white', 
  },
});