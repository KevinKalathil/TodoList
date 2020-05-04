import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import * as uuid from "uuid";

class App extends Component {
    state = {
        todos:[]
    };

    componentDidMount() {
        fetch('/api/todos')
            .then(res => res.json())
            .then(todos => this.setState({ todos }, () => console.log('Notes fetched..', todos)));
    }

    markComplete = (id) => {
        if (id !== undefined) {
            this.state.todos.map(todo => {
                if (todo.id === id) {
                    const value = todo;
                    console.log(value);
                    axios({
                        url: '/api/complete',
                        method: 'POST',
                        data: value
                    })

                }
            });

            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.isCompleted = !todo.isCompleted;
                    }
                    return todo;
                })
            });


        }
    };

    deleteNote = (id) => {
        console.log(id);
        let value = {};
        if (id !== undefined) {
            this.state.todos.map(todo => {
                if (todo.id === id) {
                    console.log(todo.id);
                    value = todo;
                }
            });
            axios({
                url: '/api/remove',
                method: 'POST',
                data: value
            })
            this.setState({
                todos: [
                    ...this.state.todos.filter(todo => todo.id !== id)]
            });
        }
    };

    addNote = (title) => {
        if (title !== "") {
            
            const newTodo = {
                id: uuid.v4(),
                isCompleted: false,
                message: title
            };

            console.log(newTodo.id);
            axios({
                url: '/api/save',
                method: 'POST',
                data: newTodo
            })
                .then(() => {
                    console.log("DATA HAS been posted");
                })
                .catch(() => {
                    console.log("OOF");
                });;
            this.setState({
                todos: [
                    ...this.state.todos, newTodo]
            });
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header"> 
                    <h1 style={{ fontFamily:'Quicksand', textAlign: "center" }}>TodoList</h1>
                    <AddTodo addNote={this.addNote} />                
                </div>
                <Todos deleteNote={this.deleteNote} markComplete = { this.markComplete } todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
