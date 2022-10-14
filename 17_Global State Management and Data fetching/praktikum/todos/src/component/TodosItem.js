import { useState } from "react"
import { useDispatch } from "react-redux"
import { editTodo, deleteTodo } from '../store/features/fecthTodoSlice'

const TodosItem = ({item}) => {
    const [display, setDisplay] = useState(true)
    const [completeTask, setCompleteTask] = useState(item.completed)
    const dispatch = useDispatch()
    const handleEdit = (data) => {
        setCompleteTask(!completeTask)
        dispatch(editTodo(data))
    }
    const handleDelete = (data) => {
        setDisplay(!display)
        dispatch(deleteTodo(data))
    }


    return(
        <div key={item.id} className="todo-item" style={display ? {} : {"display" : "none"}}>
            <div className="todo-inner" onClick={() => {handleEdit({id: item.id, completed: !item.completed})}}>
                <input className="todo-checkbox" type="checkbox" checked={completeTask}/>
                <h3 className={completeTask? "todo-title done" : "todo-title"}>{item.title}</h3>
            </div>
            <button className="todo-button" style={{ "cursor": "pointer" }} onClick={() => {handleDelete({id:item.id})}}>Delete</button>
        </div>
    )
}

export default TodosItem