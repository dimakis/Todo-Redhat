import React from 'react';
import { TodosProvider } from '../contexts/todoContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import  TodoFilter from './TodoFilterControls';
import  TodoFilterList from './TodoFilterList';

function TodoApp() {
    return (
        <TodosProvider>
            {/* <TodoFilter /> */}
            {/* < TodoFilterList /> */}
            <TodoForm />
            <TodoList />
        </TodosProvider>
    );
}

export default TodoApp;
