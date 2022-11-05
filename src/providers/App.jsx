import { TodoProvider } from "./TodoProvider"

export const AppProvider = ({children}) => {
  return (
    <TodoProvider>
      {children}
    </TodoProvider>
  )
}
