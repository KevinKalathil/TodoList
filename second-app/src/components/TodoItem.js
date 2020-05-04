import React, { Component } from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <li className="list-group-item align-items-center">
                    <input style={this.checkBoxStyle()}
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, this.props.todo.id)}
                    ></input>
                    <span style={this.noteStyle()}>{this.props.value}</span>
                    <button style={this.delButton()}
                    onClick={this.props.deleteNode.bind(this, this.props.todo.id)}>X</button>
                    <span style={this.badgeStyle()} className={this.getBadge()}>{this.getMessage()}</span>
                </li>
            </div >
        );
    }

    checkBoxStyle = () => {
        return {
            textAlign: 'left'
        };
    }

    noteStyle = () => {
        let textDec = "";
        this.props.completed === true ? textDec = 'line-through' : textDec = 'none'
        return {
            textAlign: 'left',
            marginLeft: '10px',
            textDecoration: textDec
        };
    }
    delButton = () => {
        console.log("ID: " + this.props.todo.id);
        return {
            borderRadius: '20px',
            border: '2px solid #6AC8FF',
            /*borderRadius: '100%',
            */backgroundColor: '#AEEBFA',
            marginBottom:'20px',
            fontSize:'10px',
            float: "right"
        };
    };

    badgeStyle = () => {
        return {
            marginRight: '20px',
            float: "right"
        };
    };
    getBadge = () => {
        let badge = "badge badge-";
        let msg = "Incomplete";
        if (this.props.completed) {
            badge += "success";
            msg = "Complete";
        } else {
            badge += "danger";
            msg = "Incomplete";
        }
        return badge;
    }

    getMessage = () => {
        let msg = "Incomplete";
        if (this.props.completed) {
            msg = "Complete";
        }
        return msg;
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};
export default TodoItem;