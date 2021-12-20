import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

function Greeting (props) {
  return <h1>
    {props.value}
  </h1>
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      toDoLists : []
    };
    this.handleAddingTask = this.handleAddingTask.bind(this)
  }

  handleAddingTask() {
    alert('hi, I will add this task')
  }

  renderInputForTasks() {
    return <input type="text" id="taskInput" placeholder='Insert a task'></input>
  }

  renderButtonToAddTask() {
    return <button placeholder='Add task' id="button" onClick={this.handleAddingTask}>Add Task</button>
  }

  renderGreeting() {
    return <h1>Hi! What are we doing today?</h1>
  }

  render() {
    return (
      <div className="App">
        {this.renderGreeting()}
        {this.renderInputForTasks()}{this.renderButtonToAddTask()}
      </div>
    );
  }
  
}

export default App;
