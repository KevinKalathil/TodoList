import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from "prop-types";

class Todos extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {};
    }

    render() {
        return this.props.todos.map(todo => (
            <TodoItem key={todo.id} id={todo.id} deleteNode={this.props.deleteNote} markComplete={this.props.markComplete} todo={todo} value={todo.message} completed={todo.isCompleted} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;