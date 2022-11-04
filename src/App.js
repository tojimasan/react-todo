import './App.css';
import { Todo } from './components/Todo';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { createContext, useState } from 'react';

const TodoContext = createContext([]);
const todoList = [
  {
    id: 1,
    user: {
      id: 11,
      name: 'hana',
      imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
    content: 'Buy an apple',
    createAt: "2022/11/4 9:02:01",
  },
  {
    id: 2,
    user: {
      id: 21,
      name: 'beth',
      imgSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    content: 'Drink milk',
    createAt: "2022/10/24 7:45:52",
  },
];

const App = () => {
  const [todos, setTodos] = useState(todoList);
  const handleOnEnter = (newTodo) => {
    setTodos([newTodo, ...todos]);
  }

  return (
    <div className="App">
      <TodoContext.Provider value={{todos, setTodos}}>
        <Todo>
            <Input onEnter={handleOnEnter} />
            {todos.map(todo => {
              return (
                <Card user={todo.user} content={todo.content} createAt={todo.createAt} key={todo.id} />
              );
            })}
          </Todo>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
