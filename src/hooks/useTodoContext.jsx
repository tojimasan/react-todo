import { useContext } from "react"
import { TodoContext } from "../providers/TodoProvider";

export const useTodoContext = () => {
  const todos = useContext(TodoContext);
  return todos;
}
