export const TodoForm = ({todoList, setTodoList}) => {

    

    const handleKeyUpEnter = (e) => {
        if (e.key !== 'Enter') return

        const newTodo = {
            id: new Date().getTime(),
            desc: e.target.value,
            done: false
        }

        const nuevaLista = [
            ...todoList,
            newTodo
        ]

        setTodoList(nuevaLista)

        // Forma corta:

        // setTodoList([
        //     ...todoList,
        //     {
        //         id: "",
        //         desc: e.target.value,
        //         done: false
        //     }
        // ])
    }

    console.log(todoList)

  return (
    <div className="form-group">
        <label
            className="form-label"
            htmlFor="desc"
        >Description: </label>
        <input
            className="form-control"
            type="text"
            id="desc"
            placeholder="My new todo"
            onKeyUpCapture={handleKeyUpEnter}
        />
    </div>
  )
}
