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

function CalcButtonForOperators (props) {
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
      operation_master : () => {
          try {
            this.setState({result : eval(this.state.screenValue)});
          } catch (ex) {
            this.setState({result : 'review your arithmetic and try again!'});
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

  /*---------  buttons for the operations ------------*/
  handleComputation = () =>  {
    this.state.operation_master();
  }

  general_operator = (operator) => {
    if (this.state.screenValue != DEFAULT_MSG) {
      this.setState({currentOperation : operator});
      let actualValue = this.state.screenValue;
      this.setState({screenValue : actualValue + operator});
    }
  }

  handleSumBtnClick = () => {
    this.general_operator('+');
  }

  handleSubtractionBtnClick = () => {
    this.general_operator('-');
  }

  handleMultiplyBtnClick = () => {
    this.general_operator('*');
  }

  handleDivisionBtnClick = () => {
    this.general_operator('/');
  }

  handleModulusButtonClick = () => {
    this.general_operator('%');
  }

  renderScreen = () => {
    return <CalcScreen
      value={this.state.screenValue}
      result={`RESULT: ${this.state.result}`}
    ></CalcScreen>
  }

  general_renderer = (value, clickHandler) => {
    return <CalcButtonForOperators
      value={value}
      onClick={() => clickHandler()}></CalcButtonForOperators>
  }

  renderEraseButton = () => {
    return this.general_renderer(this.state.symbols[0], this.handleEraseBtnClick);
  }

  renderComputeButton = () => {
    return this.general_renderer(this.state.symbols[6], this.handleComputation);
  }

  renderAddButton = () => {
    return this.general_renderer(this.state.symbols[1], this.handleSumBtnClick);
  }

  renderSubstractButton = () => {
    return this.general_renderer(this.state.symbols[2], this.handleSubtractionBtnClick);
  }

  renderMultiplyButton = () => {
    return this.general_renderer(this.state.symbols[4], this.handleMultiplyBtnClick);
  }
  
  renderDivisionButton = () => {
    return this.general_renderer(this.state.symbols[5], this.handleDivisionBtnClick);
  }

  renderModulusButton = () => {
    return this.general_renderer(this.state.symbols[3], this.handleModulusButtonClick);
  }

  /*---------- end of buttons for operations --------- */


  renderNumberBtn = (number) => {
    return <CalcButtonForNumber 
      onClick={() => this.handleBtnClick(number)}
      value={number}
    ></CalcButtonForNumber>
  }

  render() {
    return (
      <div className="container">
        {this.renderScreen()}

        <div className="row">
          <div className="col-lg-8">
           
            <div className="row">
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("1")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("2")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("3")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("4")}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("5")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("6")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("7")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("8")}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("9")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("0")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn("(")}
              </div>
              <div className="col-lg-3 col-md-3">
                {this.renderNumberBtn(")")}
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-12">
                {this.renderComputeButton()}
              </div>
            </div>

          </div>

          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                {this.renderEraseButton()}
              </div>
            </div>  

            <div className="row">
              <div className="col-lg-12">
                {this.renderAddButton()}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                {this.renderSubstractButton()}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                {this.renderMultiplyButton()}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                {this.renderDivisionButton()}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                {this.renderModulusButton()}
              </div>
            </div>

            </div>
          </div>

        </div>
    );
  }
}

export default App;
