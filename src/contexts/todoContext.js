import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todoReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: '0', task: 'Get a job at Red Hat', completed: false },
  { id: '1', task: 'Learn Julia', completed: false },
  { id: '2', task: 'Master the art of throwing and catching maltesers in gob', completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(todosReducer,todosReducer, defaultTodos);


  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
      {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
