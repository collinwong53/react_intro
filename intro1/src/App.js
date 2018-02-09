import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    let display_style = {
     
    }
    this.state = {
      color:'black'
    }
    changeColor = (event) => {
      this.setState({
        color: event.target.value
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <form action="">
            <input type="radio" name="color" value="green" onChange = {this.changeColor} checked={this.state.color === 'green'}/>Green
            <br/>
            <div className="color-display" style={{ backgroundColor:this.state.color}}></div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
