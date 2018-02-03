import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  createLIs(targetObj){
    const liContainer = [];
    for(let key in targetObj){
      liContainer.push(
        <li><span className="label">{key}</span>{this.person[key]}</li>
      );
    }
    return liContainer;
  }
  render() {
    this.person = {
      'Name: ' :'Collin',
      'Favorite Game: ' : 'Witcher3',
      'Favorite Food: ' : 'Steak'
    }
    const {name, favoriteFood, favoriteGame} = this.person
    return (
      <div className="App">
        <ul>
          {
            this.createLIs(this.person)
          }
        </ul>
      </div>
    );
  }
}

export default App;
