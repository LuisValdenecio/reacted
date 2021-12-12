import logo from './logo.svg';
import './App.css';
import React from 'react';

function CalcScreen (props) {
  return (
    <div id="calcScreen">
      <span>{props.value}</span>
    </div>
  );
}

function CalcButtonForNumber (props) {
  return (
    <button class="calcButton" onClick={props.onClick}>
      1
    </button>
  );
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      screenValue : 'No operation has been performed'
    }
  }

  handleBtnClick = () => {
    this.setState({screenValue : '1'});
  }

  renderScreen = () => {
    return <CalcScreen
      value={this.state.screenValue}
    ></CalcScreen>
  }

  renderNumberBtn = () => {
    return <CalcButtonForNumber onClick={() => this.handleBtnClick()}></CalcButtonForNumber>
  }

  render() {
    return (
      <div className="App">
        {this.renderScreen()}

        <div class="row">
          <div class="col-lg-3 col-md-3">
            {this.renderNumberBtn()}
          </div>
          <div class="col-lg-3 col-md-3">
            {this.renderNumberBtn()}
          </div>
          <div class="col-lg-3 col-md-3">
            {this.renderNumberBtn()}
          </div>
          <div class="col-lg-3 col-md-3">
            {this.renderNumberBtn()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
