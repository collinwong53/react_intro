import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DigitalClock = () => {
  const time = new Date();
  return(
    <div className="clock">
      <span>{time.getHours()}</span><span className="colon">:</span> 
      <span>{time.getMinutes()}</span><span className="colon">:</span> 
      <span>{time.getSeconds()}</span> 
    </div>
  );
}

class DigitalClockClass
class App extends Component {
  render() {
    return (
      <div className="App">
        <DigitalClock />
      </div>
    );
  }
}

export default App;
