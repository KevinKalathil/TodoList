import React, { Component } from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input style={this.checkBoxStyle()}
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, this.props.todo.id)}
                    ></input>
                    <span style={this.noteStyle()}>{this.props.value}</span>
                    <div style={this.delButton()}>
                        <span className={this.getBadge()}>{this.getMessage()}</span>
                        <button
                            onClick={this.props.deleteNode.bind(this, this.props.todo.id)}
                        >
                            <span>x</span>
                        </button>
                    </div>
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
            textDecoration: textDec
        };
    }
    delButton = () => {
        return {
            paddingRight:'10px',
            float: "right"
        };
    };

    badgeStyle = () => {
        return {
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