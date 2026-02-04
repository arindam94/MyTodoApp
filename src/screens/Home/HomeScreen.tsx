import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import { useTodoViewModel } from '../../stores/useTodoViewModel';
import { TodoItem } from '../../components/todo/TodoItem';

export default function HomeScreen() {
  const {
    todos,
    isLoading,
    toggleTodos,
    deleteToDos,
  } = useTodoViewModel();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <Text style={styles.emptyText}>
          No todos yet. Add one 👇
        </Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onToggle={() => toggleTodos(item.id)}
              onDelete={() => deleteToDos(item.id)}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#666',
  },
});
