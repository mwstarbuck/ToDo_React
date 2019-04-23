import React, { Component } from 'react';
import './App.css';
import { ToDoList } from './ToDoList';
import { CompletedList } from './CompletedList';



class App extends Component {

  constructor() {
    super()
    this.state = {
      task: "",
      tasks: [],
      completedTasks: []
    }
  }

  textChangeHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      task: e.target.value
    })
  }

  saveClickHandler = () => {
    let task = this.state.task
    this.setState({
      tasks: this.state.tasks.concat(task)
    })
  }

  moveTask = (name) => {
    console.log("Removing from app.js")
    console.log(name)

    this.setState({
      tasks: this.state.tasks.filter((task) => task != name),
      completedTasks: this.state.completedTasks.concat(name)
    })
  }

  deleteTask = (name) => {
    console.log("Removing from app.js")
    console.log(name)

    this.setState({
      completedTasks: this.state.completedTasks.filter((task) => task != name)
    })
  }


  render() {
    return (
      <div className="App">
        <input onChange={this.textChangeHandler} type="text"></input>
        <button onClick={this.saveClickHandler}>Add Task</button>
        <ToDoList tasks={this.state.tasks} moveTaskCallback={this.moveTask}></ToDoList>
        <CompletedList completedTasks={this.state.completedTasks} deleteTaskCallback={this.deleteTask}></CompletedList>
      </div>
    )
  }

}

export default App;
