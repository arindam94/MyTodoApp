import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { useTodoViewModel } from '../../stores/useTodoViewModel';

export default function AddTodoScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodoViewModel();

  const handleAddTodo = async () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Todo title cannot be empty');
      return;
    }

    await addTodo(title.trim());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter todo title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
});
