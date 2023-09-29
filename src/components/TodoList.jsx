import { Todo } from "./Todo"

export const TodoList = ({todoList, handleToggleDone}) => {
  return (
    <div>
        {
            todoList.map((data) => {
                return (
                    <Todo
                        key={data.id}
                        id={data.id}
                        desc={data.desc}
                        done={data.done}
                        handleToggleDone={handleToggleDone}
                    />
                )
            })
        }
    </div>
  )
}
