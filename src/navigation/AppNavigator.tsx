import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import AddTodoScreen from '../screens/AddTodo/AddTodoScreen';

export type RootStackParamList = {
  Home: undefined;
  AddTodo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Todos' }}
      />
      <Stack.Screen
        name="AddTodo"
        component={AddTodoScreen}
        options={{ title: 'Add Todo' }}
      />
    </Stack.Navigator>
  );
}
