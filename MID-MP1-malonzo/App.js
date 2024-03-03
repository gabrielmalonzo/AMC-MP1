import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';

const colors = ['#87CEEB', '#FFC0CB', '#9ACD32', '#FFA500'];

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const addTask = () => {
    if (task.trim() === '') return;

    const currentColor = colors[currentColorIndex];
    const newTask = {
      id: tasks.length.toString(),
      text: task,
      backgroundColor: currentColor,
    };

    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const renderTask = ({ item }) => (
    <View style={[styles.taskItem, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.taskText}>- {item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={addTask}
        returnKeyType="done"
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskItem: {
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  taskText: {
    color: 'black',
  },
});

export default App;