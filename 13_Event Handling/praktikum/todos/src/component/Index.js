import { Component } from 'react'
import '../css/index.css'
import { v4 as uuidv4 } from 'uuid'
import Todos from './Todos'
import FormTodos from './FormTodos'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
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
            ]
        }
    }

    tambahTodos = (addTodos) => {
        const newTodos = {
            id: uuidv4(),
            ...addTodos
        }
        this.setState({data: [...this.state.data, newTodos]})
    }

    hapusTodos = (id) => {
        const newTodos = this.state.data.filter(todos => todos.id !== id)
        this.setState({data: newTodos})
    }

    editTodos = (id) => {
        const found = this.state.data.findIndex(todos => todos.id === id)+1
        console.log(found)
        if(found){
            let newTodos = [...this.state.data]
            console.log(newTodos)
            console.log(newTodos[found])
            newTodos[found-1].completed = !newTodos[found-1].completed
            this.setState({data: newTodos})
        }
        console.log(this.state.data)

    }

    render() {
        return (
            <div className="container">
                <h1 className="main-title">todos</h1>
                <FormTodos tambahTodos={this.tambahTodos}/>
                <Todos data={this.state.data} hapusTodos={this.hapusTodos} editTodos={this.editTodos}/>
            </div>
        )
    }
}

export default Index