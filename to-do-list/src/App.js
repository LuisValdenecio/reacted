import logo from './logo.svg';
import React from 'react';
import './App.css';

function Greeting (props) {
  return <h1>
    {props.value}
  </h1>
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      greet : 'hi again! Welcome back'
    }
  }

  renderGreeting() {
    return <Greeting value={this.state.greet}></Greeting>
  }

  render() {
    return (
      <div className="App">
        {this.renderGreeting()}
      </div>
    );
  }
  
}

export default App;
