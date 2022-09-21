import { useState } from 'react'
import '../css/index.css'
import { v4 as uuidv4 } from 'uuid'
import Todos from './Todos'
import FormTodos from './FormTodos'
import Navbar from "./Navbar";

const Index = () => {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Mengerjakan Exercise",
            completed: true
        },
        {
            id: 2,
            title: "Mengerjakan Assigment",
            completed: false
        },
    ])

    const tambahTodos = (addTodos) => {
        const newTodos = {
            id: uuidv4(),
            ...addTodos
        }
        setData((oldData) => [...oldData, newTodos])
    }

    const hapusTodos = (id) => {
        const newTodos = data.filter(todos => todos.id !== id)
        setData(newTodos)
    }

    const editTodos = (id) => {
        const found = data.findIndex(todos => todos.id === id)+1
        if(found){
            let newTodos = [...data]
            newTodos[found-1].completed = !newTodos[found-1].completed
            setData(newTodos)
        }
    }

    return (
        <>
        <Navbar />
        <div className="container">
            <h1 className="main-title">todos</h1>
            <FormTodos tambahTodos={tambahTodos}/>
            <Todos data={data} hapusTodos={hapusTodos} editTodos={editTodos}/>
        </div>
        </>
    )
}

export default Index