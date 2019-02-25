import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Hello World",
      numClicks:0
    }
  }
  handleClick = ()=>{
    this.setState({
      numClicks:this.state.numClicks +1
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.headerText}
          </p>
          <Button variant="contained" color="primary" 
          onClick={this.handleClick}>
            Click Me
          </Button>
          <p>Number of Clicks: {this.state.numClicks}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          <p> This is the body </p>
        </body>
      </div>
    );
  }
}

export default App;
