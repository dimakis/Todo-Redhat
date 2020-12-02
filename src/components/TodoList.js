import React, { useContext } from 'react';
import { TodosContext } from '../contexts/todoContext'
import Todo from './Todo.js'
import useStyles from '../styles/TodoStyles';


function TodoList() {
  const classes = useStyles();
  const todos = useContext(TodosContext);

  return (
    <ul className={classes.TodoList}>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo}> </Todo>
      ))}
    </ul>
  );
}

export default TodoList;
