import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../store/features/fecthTodoSlice'
import '../css/formTodos.css'

const FormTodos = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const cekValue = title
        if(cekValue){
            dispatch(createTodo({title}))
            setTitle("")
        } else {
            alert("Isi Todos dulu dek")
        }
    }

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <form className="form-todos">
            <input type="text" className="todo-input" name="title" placeholder="Add Todo..." value={title} onChange={onChange}/>
            <button type="submit" className="todo-submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default FormTodos