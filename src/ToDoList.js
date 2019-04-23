import React, { Component } from 'react';

export class ToDoList extends Component {

    moveTaskHandler = (name) => {
        this.props.moveTaskCallback(name)
    }

    render() {

        let tasks = this.props.tasks

        let taskItems = tasks.map((task, index) => {
            return (
                <li key={index}>{task}
                    <button onClick={() => this.moveTaskHandler(task)}>Remove Task</button>
                </li>
            )
        })
        return (
            <div>
                <div className="ListHead">
                    <h3>Pending Items</h3>
                    <ul>
                        {taskItems}
                    </ul>
                </div>
            </div>
        )
    }
}
