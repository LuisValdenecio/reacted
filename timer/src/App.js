import './App.css';
import React from 'react';

function TimeCounter(props) {
  return (
    <div className="col-lg-4 col-md-4 d-flex justify-content-center">
      <h1 className="time-value">
        {props.value}
      </h1>
    </div>
  );
}

function TimerButtonController(props) {
  return (
    <div className="col-lg-4 d-flex justify-content-center">
      <button className="controlButton"
        onClick={props.onClick}
      >{props.value}</button>
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

  handleTimeControllerBtn = () => {
    alert('you clicked me!');
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

  timeContrlrRenderer = (label) => {
    return <TimerButtonController onClick={this.handleTimeControllerBtn} 
      value={label}
    >
    </TimerButtonController>    
  }

  render() {
    return (
      <div className="App">

        <div className="container">

          <div className="row">
            {this.timeContrlrRenderer('Increase')}
            {this.timeContrlrRenderer('Increase')}
            {this.timeContrlrRenderer('Increase')}
          </div>

          <div className="row">
            {this.secondRenderer()}
            {this.minuteRenderer()}
            {this.hourRenderer()}
          </div>

          <div className="row">
            {this.timeContrlrRenderer('Decrease')}
            {this.timeContrlrRenderer('Decrease')}
            {this.timeContrlrRenderer('Decrease')}
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
