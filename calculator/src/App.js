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
      {props.value}
    </button>
  );
}

function CalcEraseButton (props) {
  return (
    <button class="calcButton" id="operator"
      onClick={props.onClick}
    >{props.value}</button>
  );
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      screenValue : 'No operation has been performed',
      realValue : 0,
      symbols : ['<-- DELETE', '+', '-', '%', '*', '/']
    }
  }

  handleBtnClick = (number) => {
    if (this.state.screenValue == 'No operation has been performed') {
      this.setState({screenValue : number});
    } else {
      let actualValue = this.state.screenValue;
      this.setState({screenValue : actualValue +''+ number})
    }
  }

  handleEraseBtnClick = () => {

    // set to the default msg once all is erased
    (() => {
      let actualValue = this.state.screenValue;
      let newerValues = actualValue.split("");
      newerValues.pop();
      this.setState({screenValue : newerValues.join("")})  

      if (!this.state.screenValue)
        this.setState({screenValue : 'No operation has been performed'})
    })();
  }

  handleSumBtnClick = () => {
    alert('it sums!');
  }

  renderScreen = () => {
    return <CalcScreen
      value={this.state.screenValue}
    ></CalcScreen>
  }

  renderEraseButton = () => {
    return <CalcEraseButton
      value={this.state.symbols[0]}
      onClick={() => this.handleEraseBtnClick()}
      ></CalcEraseButton>
  }

  renderAddButton = () => {
    return <CalcEraseButton
      value={this.state.symbols[1]}
      onClick={() => this.handleSumBtnClick()}
    >
    </CalcEraseButton>
  }

  renderNumberBtn = (number) => {
    return <CalcButtonForNumber 
      onClick={() => this.handleBtnClick(number)}
      value={number}
    ></CalcButtonForNumber>
  }

  render() {
    return (
      <div className="App">
        {this.renderScreen()}

        <div class="row">
          <div class="col-lg-8">
            <div class="row">

              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(1)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(2)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(3)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(4)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(5)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(6)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(7)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(8)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(9)}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn(0)}
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12">
                {this.renderEraseButton()}
              </div>

              <div class="col-lg-12">
                {this.renderAddButton()}
              </div>

              <div class="col-lg-12">

              </div>

              <div class="col-lg-12">

              </div>

              <div class="col-lg-12">
                
              </div>

            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
