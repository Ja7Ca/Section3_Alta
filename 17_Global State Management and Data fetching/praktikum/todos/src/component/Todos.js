// import { Component } from 'react'
import '../css/todos.css'
import TodosItem from './TodosItem'
import React, { useEffect } from 'react'
import FormTodos from './FormTodos'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../store/features/fecthTodoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const buttonStatus = useSelector((state) => state.todos.buttonStatus)
    const dispatch = useDispatch()
    

    useEffect(() => {
		dispatch(fetchTodos());
	}, [buttonStatus, dispatch]);

    if(todos.status === "succeeded"){
        return (
            <>
            <FormTodos/>
            <div className="todo-list">
                {todos.data._onetomany_todo.map((todo) => (
                    <TodosItem key={todo.id} item={todo}/>
                ))
                }
            </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Todos;
