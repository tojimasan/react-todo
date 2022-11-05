import { createContext, useState } from "react";

const TodoContext = createContext([]);

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  }
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  const providerValues = {
    todos,
    addTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={providerValues}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
