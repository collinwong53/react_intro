import React, { Component } from 'react';
import Hand from './hand'
import './analog_clock.css'

class AnalogClock extends Component{
    constructor(props){
      super(props)
      const time = this.getTime();
      this.state = {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
      }
    }
    getTime(){
      return new Date()
    }
    componentDidMount(){
      setInterval(this.updateTime.bind(this),1000);
    }
    updateTime(){
      const time = this.getTime();
      let hour = time.getHours();
      this.setState({
        hours: (hour>12?hour-12:hour),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
      })
    }
    getAngle(maxValue, currentValue){
      var angle = currentValue*360/maxValue;
      return angle-90;
    }
    addTickMarks(quantity){
      const tickMarksArray = [];
      const angleDelta = 360 / quantity;
      
      for(let tickMarkIndex = 0, angle=-90; tickMarkIndex < quantity; tickMarkIndex++, angle+=angleDelta){
        let tickHeight = tickMarkIndex%5===0?'15%':'5%'
        tickMarksArray.push(
          <div key={tickMarkIndex} className='tickContainer' style={
            {transform:`rotateZ(${angle}deg)`,
          }}>
            <div className="tickMark" style={{
              width:`${tickHeight}`
            }}/>
          </div>);
      }
      return tickMarksArray;
    }
    render(){
      return(
        <div className="clockFace">
          <Hand size={90} color ='red' angle={this.getAngle(60,this.state.seconds)}/>
          <Hand size={80} color='blue' angle={this.getAngle(60,this.state.minutes)}/>
          <Hand size={40} color='green' angle={this.getAngle(12,this.state.hours)}/>
          {this.addTickMarks(60)}
          {this.props.digital}
        </div>
      )
    }
  }

  export default AnalogClock;