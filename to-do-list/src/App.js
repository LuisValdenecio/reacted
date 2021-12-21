import React, { Component } from 'react';
import './App.css';

function TaskItems (props) {
  const tasks = props.tasks;
  const listTasks = tasks.map((task) => 
    <li key={task.id.toString()}>
      {task.description}
    </li>
  );
  return (
    <ul>{listTasks}</ul>
  );
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      toDoList : [
        {
          id : 1,
          description : 'Eat pizza'
        },
        {
          id : 2,
          description : 'Watch movies'
        }
      ]
    };
    this.handleAddingTask = this.handleAddingTask.bind(this);
    this.renderListing = this.renderListing.bind(this);
  }

  handleAddingTask() {
    let lastTaskId = this.state.toDoList[
      this.state.toDoList.length - 1
    ].id;

    let newTask = {id : lastTaskId + 1, description : 'another boring task'};

    let newToDoList = this.state.toDoList;
    newToDoList.push(newTask);

    this.setState({
      toDoList : newToDoList
    });   
  }

  renderInputForTasks() {
    return <input type="text" id="taskInput" placeholder='Insert a task'></input>
  }

  renderListing() {
    return <TaskItems tasks={this.state.toDoList}></TaskItems>
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
        {this.renderListing()}
      </div>
    );
  }
  
}

export default App;
