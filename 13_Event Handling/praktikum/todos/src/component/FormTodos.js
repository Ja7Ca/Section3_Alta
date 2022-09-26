import { Component } from 'react'
import '../css/formTodos.css'

class FormTodos extends Component {
    state = {
        title: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const cekValue = this.state.title
        if(cekValue){
            const newTodos = {
                title: this.state.title,
                completed: false
            }

            this.props.tambahTodos(newTodos)
        } else {
            alert("Isi Todos dulu dek")
        }
    }

    onChange = (e) => {
        this.setState({ title: e.target.value})
    }

    render() {
        return (
            <form className="form-todos">
                <input type="text" className="todo-input" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}/>
                <button type="submit" className="todo-submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default FormTodos