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
        <input class="form-control form-control-lg" type="text" aria-label=".form-control-lg example" placeholder='Type in the task' 
        onChange={props.onInputChange} 
        value={props.inputValue}/><br/>
        <input class="btn btn-primary"  type="submit" value="Add the task"/>
    </form>    
  );  
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      toDoList : [],
      inputValue : ''
    };
    this.onInputChange = this.onInputChange.bind(this);
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
    }

  }

  renderForm() {
    return <TaskForm onFormSubmit={this.onFormSubmit}
      onInputChange={this.onInputChange}
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
    return <h5>Hi! What are we doing today?</h5>
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
