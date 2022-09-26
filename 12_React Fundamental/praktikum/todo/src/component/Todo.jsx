import React from "react";
import "../css/todo.css"
import data from "../data/todo.js"

function GetTodo(props){
    const {listTodo} = props
    console.log(listTodo)
    
    return (
        <>
            {listTodo.map((todo) => (
                <div className="todo-item">
                    <p className={!todo.completed ? "active" : "done"}>{todo.name}</p>
                </div>
            ))}
        </>
    )
}

function Todo(){
    console.log(data);
    return (
        <div className="list-todo">
            <GetTodo listTodo={data} />
        </div>
    )
}

export default Todo;

