import React, { Component } from 'react';
import AnalogClock from './components/analog_clock'
import './App.css'
import DigitalClock from './components/digital_clock'
class App extends Component {
  render() {
    return (
      <div className="App">
        <AnalogClock digital={<DigitalClock type={12}/>}/>
      </div>
    );
  }
}

export default App;
