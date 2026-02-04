import React, { useLayoutEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTodoViewModel } from '../../stores/useTodoViewModel';
import { TodoItem } from '../../components/todo/TodoItem';

export default function HomeScreen() {

    const navigation = useNavigation();

  const {
    todos,
    isLoading,
    toggleTodos,
    deleteToDos,
    addTodo,
  } = useTodoViewModel();

  // 🔹 Toolbar button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addTodo('New Todo')}
        >
          <Text style={styles.addText}>＋</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, addTodo]);

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
  addButton: {
    marginRight: 16,
  },
  addText: {
    fontSize: 26,
    fontWeight: '600',
  },
});
