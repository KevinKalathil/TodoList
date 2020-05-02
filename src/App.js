import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';


class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                isCompleted: false,
                message: "Note 1"
            },
            {
                id: 2,
                isCompleted: false,
                message: "Note 2"
            },
            {
                id: 3,
                isCompleted: false,
                message: "Note 3lkjsdfl;kj"
            }
        ]
    };

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }
                console.log(todo.id);
                console.log(todo.isCompleted);
                return todo;
            })
        });
    };

    deleteNote = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => todo.id !== id)]
        });
    };

    render(){
        return (
            <div className="App">
                <h1>TodoList</h1>
                <Todos deleteNote={this.deleteNote} markComplete = { this.markComplete } todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
