// import { Component } from 'react'
import '../css/todos.css'
import TodosItem from './TodosItem'

const Todos = ({data, editTodos, hapusTodos}) => {
        return (
            <div className="todo-list">
                {data.map((todo) => (
                    <TodosItem key={todo.id} item={todo} hapusTodos={hapusTodos} editTodos={editTodos} />
                ))}
            </div>
        )
}

export default Todos;