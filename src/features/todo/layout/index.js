import { useContext } from 'react';
import { TodoContext } from '../../../App';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';

export const Todo = () => {
  const {todos ,setTodos} = useContext(TodoContext);
  const onEnter = (newTodo) => {
    setTodos([newTodo, ...todos]);
  }

  const css = {
    height: 'fit-content',
    width: '300px',
    borderRadius: '8px',
    margin: '100px auto',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
  }

  return (
    <div style={css}>
      <TodoInput onEnter={onEnter} />
      <TodoList todos={todos} />
    </div>
  )
}
