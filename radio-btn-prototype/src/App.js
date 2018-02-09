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
  }
  changeColor = (event) => {
    this.setState({
      color: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <form action="">
            <input type="radio" name="color" value="green" onChange = {this.changeColor} checked={this.state.color === 'green'}/>Green
            <br/>
            <input type="radio" name="color" value="blue" onChange = {this.changeColor} checked={this.state.color==='green'}/>Blue
            <br/>
            <input type="radio" name="color" value="lavender" onChange = {this.changeColor} checked={this.state.color==='green'}/>Lavender
            <br/>
            <input type="radio" name="color" value="red" onChange = {this.changeColor} checked={this.state.color==='green'}/>Red
            <br/>
            <input type="radio" name="color" value="orange" onChange = {this.changeColor} checked={this.state.color==='green'}/>Orange
            <br/>
            <div className="color-display" style={{ 
              backgroundColor:this.state.color,
              width:'100px',
              height:'100px'
              }}>
            </div>
            

          </form>
        </div>
      </div>
    );
  }
}

export default App;
