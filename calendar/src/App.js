import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import mockData from './mockData.js'

class App extends Component {


  constructor(props) {
    super(props);
    this.api = JSON.parse(mockData());

  }

  render() {
    return (
      <div className="App">
        <h1>{this.api.data}</h1>
      </div>
    );

  }
}

export default App;
