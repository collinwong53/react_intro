import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  createProfiles(targetObj){
    const profileContainer = [];
    for(let key in targetObj){
      profileContainer.push(
        <div className="person">
          <div className="top_container">
            <img className="faceshot" src={targetObj[key].headshot} alt="face shot"/>
            <div className="details">{targetObj[key].name}</div>
            <div className="details">{targetObj[key].age}</div>
            <div className="details">{targetObj[key].occupation}</div>
          </div>
          <div className="bottom_container">{targetObj[key].description}</div>
        </div>
      )
    }
    return profileContainer;
  }
  render() {
    const people = [
      {
        name: 'Jack',
        age: 29,
        occupation: 'florist',
        headshot: 'https://cdn.goodgallery.com/3e6de05c-fdc8-4382-8ce7-abe2bec51aa9/s/0400/26dvkdld/manhattan-headshots.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ipsa.'
      },
      {
        name: 'Sally',
        age: 32,
        occupation: 'Dictator',
        headshot: 'https://www.organicheadshots.com/images/headshot06-thumb.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ipsa.'
      },
      {
        name: 'Zarkon',
        age:102,
        occupation: 'Hypnotist',
        headshot: 'https://www.wasiofaces.com/wp-content/uploads/San-Diego-Headshots-Photography-041.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, ipsa.'
      }
    ]
    return (
      <div className="App">
          {
            this.createProfiles(people)
          }
      </div>
    );
  }
}

export default App;
