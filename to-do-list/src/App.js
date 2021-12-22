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

function TaskForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
        <input type="text" placeholder='Type in the task' onChange={props.onInputChange}/><br></br>
        <textarea type="text" placeholder='Descrive the task' onChange={props.onTextAreaChange} />
        <input type="submit" value="Submit"/>
    </form>    
  );  
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      toDoList : [],
      inputValue : '',
      textAreaValue : ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  onInputChange(e) {
    this.setState({inputValue : e.target.value});
  }

  onTextAreaChange(e) {
    this.setState({textAreaValue : e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    alert('you have submited the form');
    console.log(this.state.inputValue);
    console.log(this.state.textAreaValue);
  }

  renderForm() {
    return <TaskForm onFormSubmit={this.onFormSubmit}
    onInputChange={this.onInputChange}
    onTextAreaChange={this.onTextAreaChange}
    >
    </TaskForm>
  }

  renderGreeting() {
    return <h1>Hi! What are we doing today?</h1>
  }

  render() {
    return (
      <div className="App">
        {this.renderGreeting()}
        {this.renderForm()}
      </div>
    );
  }
  
}

export default App;
