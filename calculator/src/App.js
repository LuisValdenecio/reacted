import logo from './logo.svg';
import './App.css';
import React from 'react';

const DEFAULT_MSG = '0';

function CalcScreen (props) {
  return (
    <div id="calcScreen">
      <span>{props.value}</span><br/>
      <span id="result">{props.result}</span>
    </div>
  );
}

function CalcButtonForNumber (props) {
  return (
    <button className="calcButton" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function CalcEraseButton (props) {
  return (
    <button className="calcButton" id="operator"
      onClick={props.onClick}
    >{props.value}</button>
  );
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      screenValue : DEFAULT_MSG,
      result : DEFAULT_MSG,
      currentOperation : null,
      realValue : 0,
      symbols : ['<-- DELETE', '+', '-', '%', '*', '/', 'COMPUTE'],
      operations : {
        '+' : () => {
          let leftSide = Number(this.state.screenValue.split('+')[0]);
          let rightSide = Number(this.state.screenValue.split('+')[1]);
          this.setState({result : leftSide + rightSide});
        },

        '-' : () => {

        },

        '*' : () => {

        },

        '/' : () => {

        },

        '%' : () => {

        }
      }
    }
  }

  handleBtnClick = (number) => {
    if (this.state.screenValue == DEFAULT_MSG) {
      this.setState({screenValue : number});
    } else {
      let actualValue = this.state.screenValue;
      this.setState({screenValue : actualValue + number})
    }
  }


  handleEraseBtnClick = () => {

    if (this.state.screenValue != DEFAULT_MSG) {
      let actualValue = this.state.screenValue.split("");
      actualValue.pop();
      let newValue = actualValue.length == 0 ? [] : actualValue;
      this.setState({screenValue : newValue.join("")});

      if (newValue.length == 0) {
        this.setState({screenValue : DEFAULT_MSG})
      }
    }

  }

  handleComputation = () =>  {
    this.state.operations[
      this.state.currentOperation
    ]();
  }


  handleSumBtnClick = () => {
    if (this.state.screenValue != DEFAULT_MSG) {
      this.setState({currentOperation : '+'})
      let actualValue = this.state.screenValue;
      this.setState({screenValue : actualValue + '+'});
    }
  }

  renderScreen = () => {
    return <CalcScreen
      value={this.state.screenValue}
      result={`RESULT: ${this.state.result}`}
    ></CalcScreen>
  }

  renderEraseButton = () => {
    return <CalcEraseButton
      value={this.state.symbols[0]}
      onClick={() => this.handleEraseBtnClick()}
      ></CalcEraseButton>
  }

  renderComputeButton = () => {
    return <CalcEraseButton
      value={this.state.symbols[6]}
      onClick={() => this.handleComputation()}
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
                {this.renderNumberBtn("1")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("2")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("3")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("4")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("5")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("6")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("7")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("8")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("9")}
              </div>
              <div class="col-lg-3 col-md-3">
                {this.renderNumberBtn("0")}
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
                {this.renderComputeButton()}
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
