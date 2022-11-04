import { Card } from "../../../components/Card"

export const TodoList = ({todos}) => {
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
