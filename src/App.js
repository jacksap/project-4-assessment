import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circle1selected: null, 
      circle2selected: null, 
      circle3selected: null, 
      circle4selected: null 
    }
  }

  // Event Handlers

  handleClickCircle1 = (e) => {
    e.preventDefault();
    this.setState({
      circle1selected: true,
      circle2selected: false,
      circle3selected: false,
      circle4selected: false
    });
  }
  handleClickCircle2 = (e) => {
    e.preventDefault();
    this.setState({
      circle1selected: false,
      circle2selected: true,
      circle3selected: false,
      circle4selected: false
    });
  }
  handleClickCircle3 = (e) => {
    e.preventDefault();
    this.setState({
      circle1selected: false,
      circle2selected: false,
      circle3selected: true,
      circle4selected: false
    });
  }
  handleClickCircle4 = (e) => {
    e.preventDefault();
    this.setState({
      circle1selected: false,
      circle2selected: false,
      circle3selected: false,
      circle4selected: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">PROJECT 4 ASSESSMENT</header>
        <main>
          <CircleSelector
            circle1selected={this.state.circle1selected}
            circle2selected={this.state.circle2selected}
            circle3selected={this.state.circle3selected}
            circle4selected={this.state.circle4selected}
            handleClickCircle1={this.handleClickCircle1}
            handleClickCircle2={this.handleClickCircle2}
            handleClickCircle3={this.handleClickCircle3}
            handleClickCircle4={this.handleClickCircle4}
          />
          <Circles 
            circle1selected={this.state.circle1selected}
            circle2selected={this.state.circle2selected}
            circle3selected={this.state.circle3selected}
            circle4selected={this.state.circle4selected}
          />
        </main>
      </div>
    );
  }
}

export default App;
