import './App.css';
import React from 'react';

function TimeCounter(props) {
  return (
    <div className="col-lg-4">
      <p className="time-value">
        {props.value}
      </p>
    </div>
  );
}

function TimerButtonController(props) {
  return (
    <div className="col-lg-4">
      <button className="controlButton"
        onClick={props.onClick}
      ></button>
    </div>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultValue : '00 '
    }
  }

  secondRenderer = () => {
    return <TimeCounter value={this.state.defaultValue}>
    </TimeCounter>
  }

  minuteRenderer = () => {
    return <TimeCounter value={this.state.defaultValue}>
    </TimeCounter>
  }

  hourRenderer = () => {
    return <TimeCounter value={this.state.defaultValue}>
    </TimeCounter>
  }

  timeControlRenderer = () => {

  }
  
  render() {
    return (
      <div className="App">

        <div className="container">
          <div class="row">
            {this.secondRenderer()}
            {this.minuteRenderer()}
            {this.hourRenderer()}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
