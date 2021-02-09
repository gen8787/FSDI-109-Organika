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

                <h1 className="display-4 mb-3">Grocery List</h1>

                <div>
                    <input value={this.state.todoText} placeholder="enter text here" onChange={this.handleTextChange} type="text" />
                    <button type="submit" onClick={this.handleButtonClick} className="btn btn-info ml-3">Add Item</button>
                </div>

                <div className="list mt-3">
                    <ul>
                        {this.state.allTodos.map((todo, i) =>
                            <li key={i}>{todo} - <button onClick={() => this.handleDeleteTodo(i)} className="btn btn-sm btn-danger">Delete</button></li>
                        )}
                    </ul>
                </div>


            </>
        );
    }

    // H A N D L E R S
    handleTextChange = e => {
        this.setState({ todoText: e.target.value });
    };

    handleButtonClick = () => {
        var todos = this.state.allTodos;
        todos.push(this.state.todoText);

        this.setState({ allTodos: todos, todoText: "" });
    };

    handleDeleteTodo = i => {
        const [...curTodos] = this.state.allTodos;
        curTodos.splice(i, 1);

        this.setState({ allTodos: curTodos });
    };

    // E N D   O F   C L A S S
}

export default Todo;