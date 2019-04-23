import React, { Component } from 'react';

export class CompletedList extends Component {

    deleteTaskHandler = (name) => {
        this.props.deleteTaskCallback(name)
    }


    render() {
        let completedTasks = this.props.completedTasks

        let taskItems = completedTasks.map((task, index) => {
            return (
                <li key={index}>{task}
                    <button onClick={() => this.deleteTaskHandler(task)}>Remove Task</button>
                </li>
            )
        })

        return (
            <div>
                <div className="ListHead">
                    <h3>Completed Items</h3>
                    <ul>
                        {taskItems}
                    </ul>
                </div>
            </div>
        )
    }
}
