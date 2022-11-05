import { useTodoContext } from '../../../hooks/useTodoContext';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';

export const Todo = () => {
  const { todos } = useTodoContext();
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
      <TodoInput />
      {todos.length >= 1 && <TodoList />}
    </div>
  )
}
