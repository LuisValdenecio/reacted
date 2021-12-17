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
      second : 0,
      minute : 0,
      hour : 0
    };
  }

  secondRenderer = () => {
    return <TimeCounter value={this.state.second}>
    </TimeCounter>
  }

  minuteRenderer = () => {
    return <TimeCounter value={this.state.minute}>
    </TimeCounter>
  }

  hourRenderer = () => {
    return <TimeCounter value={this.state.hour}>
    </TimeCounter>
  }

  /* time controller functions */
  decreaseHourBtn = () => {
    return <TimerButtonController onClick={this.handleHourDecrease} 
    value={'Decrease'}>
    </TimerButtonController>      
  }

  increaseHourBtn = () => {
    return <TimerButtonController onClick={this.handleHourIncrease} 
    value={'Increase'}>
    </TimerButtonController>   
  }

  decreaseMinuteBtn = () => {
    return <TimerButtonController onClick={this.handleMinuteDecrease} 
    value={'Decrease'}>
    </TimerButtonController>    
  }

  increaseMinuteBtn = () => {
    return <TimerButtonController onClick={this.handleMinuteIncrease} 
    value={'Increase'}>
    </TimerButtonController>    
  }

  decreaseSecondBtn = () => {
    return <TimerButtonController onClick={this.handleSecondDecrease} 
    value={'Increase'}>
    </TimerButtonController>    
  }

  increaseSecondBtn = () => {
    return <TimerButtonController onClick={this.handleSecondIncrease} 
    value={'Increase'}>
    </TimerButtonController>
  }

  handleSecondIncrease = () => {
    let currentSecond = this.state.second;
    this.setState({
      second : currentSecond + 1
    });
  }

  handleSecondDecrease = () => {
    let currentSecond = this.state.second;
    if (currentSecond > 0) {
      this.setState({
        second : currentSecond - 1
      })
    }
  }

  handleMinuteDecrease = () => {
    let currentMinute = this.state.minute;
    if (currentMinute > 0) {
      this.setState({
        minute : currentMinute - 1
      })
    }
  }

  handleMinuteIncrease = () => {
    let currentMinute = this.state.minute;
    this.setState({
      minute : currentMinute + 1
    })
  }

  handleHourDecrease = () => {
    let currentHour = this.state.hour;
    if (currentHour > 0) {
      this.setState({
        hour : currentHour - 1
      })
    }
  }

  handleHourIncrease = () => {
    let currentHour = this.state.hour;
    this.setState({
      hour : currentHour + 1
    })
  }


  timeContrlrRenderer = (operation, timelabel) => {
    return <TimerButtonController onClick={this.handleTimeControllerBtn} 
      value={operation}
    >
    </TimerButtonController>    
  }

  render() {
    return (
      <div className="App">

        <div className="container">

          <div className="row">
            {this.increaseSecondBtn()}
            {this.increaseMinuteBtn()}
            {this.increaseHourBtn()}
          </div>

          <div className="row">
            {this.secondRenderer()}
            {this.minuteRenderer()}
            {this.hourRenderer()}
          </div>

          <div className="row">
            {this.decreaseSecondBtn()}
            {this.decreaseMinuteBtn()}
            {this.decreaseHourBtn()}
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
