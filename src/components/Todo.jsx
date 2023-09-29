export const Todo = ({ id, desc, done, handleToggleDone }) => {

  return (
    <div className={`alert alert-${done ? 'success' : 'warning'}`}>
        <span>{desc}</span>
        <button
            onClick={() => handleToggleDone(id)}
            className={`btn btn-sm btn-outline-${done ? 'success' : 'warning'}`}
        >Completar</button>
    </div>
  )
}
