import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:""
        };
    }

    state = {
        title: ""
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addNote(this.state.title);
        this.setState({ title: "" });
    };

    change = e => {
        this.setState({ title: e.currentTarget.value });
    };

    render() {
        return (
            <form style={{marginLeft:'20px', paddingBottom:'10px'}} onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    style={{
                        flex: "30", borderRadius: '20px', border: '2px solid #659EBA',
                        padding: '10px',  margin: 'auto', width: "900px"
                    }}
                    placeholder="Add note"
                    value={this.state.title}
                    onChange={this.change}
                ></input>
                <input
                    type="submit"
                    name="submit"
                    className="btn"
                    style={{ borderRadius: '20px', border: '2px solid #659EBA', marginLeft: '10px'}}
                ></input>
            </form>
        );
    }
}

export default AddTodo;