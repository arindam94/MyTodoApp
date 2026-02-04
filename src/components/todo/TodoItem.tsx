import React from "react";
import {View, Text, Pressable, StyleSheet} from 'react-native';
import { Todo } from '../../types/Todo';


interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItem: React.FC<Props> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <Pressable onPress={onToggle} style={styles.container}>
      <Text
        style={[
          styles.text,
          todo.isCompleted && styles.completed,
        ]}
      >
        {todo.title}
      </Text>

      <Pressable onPress={onDelete}>
        <Text style={styles.delete}>✕</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#222',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  delete: {
    color: 'red',
    fontSize: 18,
    paddingHorizontal: 8,
  },
});