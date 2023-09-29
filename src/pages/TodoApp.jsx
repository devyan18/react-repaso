/*
    {
        id: number,
        desc: string,
        done: boolean
    }
*/

import { useState } from "react"
import { TodoForm } from "../components/TodoForm"
import { TodoList } from "../components/TodoList"


export const TodoApp = () => {

    const [todoList, setTodoList] = useState([])


    const handleToggleDone = (id) => {
        const listaActualizada = todoList.map((todo) => {
            if (todo.id !== id) return todo
            
            return {
                ...todo,
                done: !todo.done
            }
        })

        setTodoList(listaActualizada)
    }

  return (
    <div>
        <TodoForm todoList={todoList} setTodoList={setTodoList} /> 
        <TodoList todoList={todoList} handleToggleDone={handleToggleDone} />
    </div>
  )
}
