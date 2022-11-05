import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Input } from "../../../components/Input";
import { useTodoContext } from "../../../hooks/useTodoContext";

export const TodoInput = () => {
  const { addTodo } = useTodoContext();
  const [content, setContent] = useState('');
  const user = {
    id: uuidv4(),
    name: 'kazuto',
    imgSrc: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && content.length > 1) {
      const newTodo = {
        id: uuidv4(),
        user,
        content,
        createAt: new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }),
      };
      addTodo(newTodo);
      setContent('');
    }
  }

  return (
    <Input value={content} placeholder='Enter Todo' onChange={handleChange} onKeyDown={handleKeyDown}/>
  )
}
