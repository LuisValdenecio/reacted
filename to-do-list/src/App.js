import React, { Component } from 'react';
import './App.css';

function TaskItems (props) {
  const tasks = props.tasks;
  const listTasks = tasks.map((task) => 
    <li key={task.id.toString()}>
      {task.title}
    </li>
  );

  return (
    <ul>{listTasks}</ul>
  );
 }

function TaskForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
        <input type="text" placeholder='Type in the task' onChange={props.onInputChange} 
        value={props.inputValue}/><br/>
        <textarea type="text" placeholder='Describe the task' onChange={props.onTextAreaChange} 
        value={props.textAreaValue}/><br/>
        <input type="submit" value="Add the task"/>
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
    this.renderTaskItems = this.renderTaskItems.bind(this);
  }

  onInputChange(e) {
    this.setState({inputValue : e.target.value});
  }

  onTextAreaChange(e) {
    this.setState({textAreaValue : e.target.value});
  }

  onFormSubmit(e) {

    e.preventDefault();

    if (this.state.inputValue != '') {
      const nextIndex = this.state.toDoList.length + 1;
      const task = {
        id : nextIndex,
        title : this.state.inputValue
      }

      const newToDoList = this.state.toDoList;
      newToDoList.push(task)

      this.setState({
        toDoList : newToDoList
      }); 

      // clear the form fields
      this.setState({
        inputValue : ''
      });

      this.setState({
        textAreaValue : ''
      });
    }

  }

  renderForm() {
    return <TaskForm onFormSubmit={this.onFormSubmit}
      onInputChange={this.onInputChange}
      onTextAreaChange={this.onTextAreaChange}
      textAreaValue={this.state.textAreaValue}
      inputValue={this.state.inputValue}
    >
    </TaskForm>
  }

  renderTaskItems() {
    if (this.state.toDoList.length > 0) {
      return <TaskItems tasks={this.state.toDoList}></TaskItems>
    } else 
    return (
      <h5>You have not added any tasks yet</h5>
    );
  }

  renderGreeting() {
    return <h1>Hi! What are we doing today?</h1>
  }

  render() {
    return (
      <div className="App">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              {this.renderGreeting()}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {this.renderForm()}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {this.renderTaskItems()}
            </div>
          </div>

        </div>
      </div>
    );
  }
  
}

export default App;
