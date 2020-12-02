import React from 'react';
import { TodosProvider } from './contexts/todoContext';
import TodoList from './components/TodoList';

function TodoApp() {
  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
}

export default TodoApp;
