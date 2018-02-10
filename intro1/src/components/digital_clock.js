import React, { Component } from 'react';
import './digital_clock.css';

class DigitalClock extends Component{
    constructor(props){
        super();
        const time = this.getCurrentTime();
        this.colonVisibilityStates = ['visible','hidden'];
        this.state = {
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds(),
            type: parseInt(props.timeType),
            amPm: '',
            colonSelector: 0,
            flag: false,
        };
  
        console.log('in constructor', props);
    }
  
    getCurrentTime(){
        return new Date();
    }
  
    componentDidMount() {
        setInterval(this.updateTime.bind(this), 1000);
    }
    
    formatTime(time){
        return time<10?`0${time}`:time;
    }
  
    updateTime(){
        const time = this.getCurrentTime();
        const newState = {};
        
        if(this.state.type === 12) {
            if(this.state.hours > 12) {
                newState.amPm = (this.state.hours>12 ? 'PM' : 'AM');
                newState.hours= this.formatTime((time.getHours() - 12)),
                newState.flag= true
            }
        }
        newState.colonSelector = 1 - this.state.colonSelector;
        newState.minutes= this.formatTime(time.getMinutes()),
        newState.seconds= this.formatTime(time.getSeconds()),
          
        this.setState(newState);
    }
    
    switchTime(){
        const time = new Date();
        if(this.state.type !== 12){
            this.setState(
                {
                    type: 12,
                }
            )
        }else{
            this.setState(
                {
                    type: 24,
                    hours: time.getHours(),
                    amPm: ''
                }
            )
        }
    }
  
    render(){
        const colonStyle = {
          'visibility': this.colonVisibilityStates[this.state.colonSelector]
        }
        return(
            <div className='clock' onClick={this.switchTime.bind(this)}>
                <span>{this.state.hours}</span>
                <span className='colon' style={colonStyle}>:</span>
                <span>{this.state.minutes}</span>
                <span className='colon' style={colonStyle}>:</span>
                <span>{this.state.seconds}</span>
                <span>{this.state.amPm}</span><br/>
                
            </div>
        );
    }
  }
  
  export default DigitalClock