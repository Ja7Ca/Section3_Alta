const TodosItem = ({item, hapusTodos, editTodos}) => {
    return(
        <div key={item.id} className="todo-item">
            <div className="todo-inner" onClick={() => {editTodos(item.id)}}>
                <input className="todo-checkbox" type="checkbox" checked={item.completed}/>
                <h3 className={item.completed? "todo-title done" : "todo-title"}>{item.title}</h3>
            </div>
            <button className="todo-button" onClick={() => {hapusTodos(item.id)}}>Delete</button>
        </div>
    )
}

export default TodosItem