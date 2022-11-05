import { createContext, useState } from "react";

const TodoContext = createContext([]);

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  }
  const providerValues = {
    todos,
    addTodo,
  };

  return (
    <TodoContext.Provider value={providerValues}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
