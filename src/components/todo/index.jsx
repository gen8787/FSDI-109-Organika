import React, { Component } from 'react';
import "./todo.css";

class Todo extends Component {
    state = {
        todoText: "",
        allTodos: []
    }

    render() {
        return (
            <>

                <h1 className="display-4 mb-3">Todo</h1>

                <div>
                    <input value={this.state.todoText} onChange={this.handleTextChange} type="text" />
                    <button onClick={this.handleButtonClick} className="btn btn-info">Add Todo</button>
                </div>

                <ul>
                    {this.state.allTodos.map((todo, i) =>
                        <li key={i}>{todo} - <button onClick={() => this.handleDeleteTodo(i)} className="btn btn-small btn-danger">Delete</button></li>
                    )}
                </ul>

            </>
        );
    }

    // H A N D L E R S
    handleTextChange = (e) => {
        this.setState({ todoText: e.target.value });
    };

    handleButtonClick = () => {
        var todos = this.state.allTodos;
        todos.push(this.state.todoText);

        this.setState({ allTodos: todos, todoText: "" });
    };

    handleDeleteTodo = (i) => {
        const [...curTodos] = this.state.allTodos;
        curTodos.splice(i, 1);

        this.setState({ allTodos: curTodos });
    };

    // E N D   O F   C L A S S
}

export default Todo;