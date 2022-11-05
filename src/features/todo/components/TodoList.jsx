import { Card } from "../../../components/Card"
import { useTodoContext } from "../../../hooks/useTodoContext"

export const TodoList = () => {
  const { todos } = useTodoContext();
  const css = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }

  return (
    <div style={css}>
      {todos.map(todo => {
        return (
          <Card user={todo.user} content={todo.content} createAt={todo.createAt} key={todo.id} />
        )
      })}
    </div>
  )
}
