import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./todo.css";
import { addTodo, removeTodo } from '../../store/actions/actions'

class Todo extends Component {
    state = {
        todoText: "",
    }

    render() {
        return (
            <>

                <h1 className="display-4 mb-3">Grocery List</h1>

                <div>
                    <input value={this.state.todoText} placeholder="enter text here" onChange={this.handleTextChange} type="text" />
                    <button type="submit" onClick={() => this.props.addTodo(this.state.todoText)} className="btn btn-success ml-3">Add Item</button>
                </div>

                <div className="list mt-3">
                    <ul>
                        {this.props.todos.map((todo, i) =>
                            <li className="mb-3" key={i}>{todo} - <button onClick={() => this.props.removeTodo(todo)} className="btn btn-sm btn-danger">Delete</button></li>
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

    // E N D   O F   C L A S S
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { addTodo, removeTodo })(Todo);
