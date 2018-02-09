import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const DigitalClock = (props) => {
//   // const time = this.getCurrentTime();
//   return(
//     <div className="clock">
//       <span>{time.getHours()}</span><span className="colon">:</span> 
//       <span>{time.getMinutes()}</span><span className="colon">:</span> 
//       <span>{time.getSeconds()}</span> 
//     </div> 
//   );
// }

class DigitalClockClass extends Component{
  constructor(props){
    super(props);
    const time = this.getCurrentTime();
    this.state = {
      hours : time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      colon: " ",
      type: props.timeType,
      ampm: ''
    }
  }
  updateColon(){
    const time = this.getCurrentTime();
    if(time.getSeconds()%2===0){
      this.setState({
        colon:':'
      })
    }else{
      this.setState({
        colon:' '
      })
    }
  }
  swapModes = () =>{
    if(this.state.type===24){
      this.setState({
        type : 12
      })
    }else{
      this.setState({
        type : 24
      })
    }
  }
  componentDidMount(){
    setInterval(this.updateTime.bind(this),1000);
    setInterval(this.updateColon.bind(this),1000);
  }
  formatTime(time){
    return (time<10)?`0${time}`:time
  }
  updateTime(){
    const time = this.getCurrentTime();
    if(this.state.type===12){
      if(time.getHours()>12){
        let hour = time.getHours()-12;
        this.setState({
          hours : this.formatTime(hour),
          ampm : 'PM'
        })
      }else{
        this.setState({
          ampm : 'AM'
        })
      }
    }else{
      this.setState({
        hours:(time.getHours())
      })
    }
    this.setState(
      {
        minutes : this.formatTime(time.getMinutes()),
        seconds : this.formatTime(time.getSeconds()),
      }
    )
  }
  getCurrentTime(){
    return new Date();
  }
  render(){
    return(
      <div className="clock" onClick={this.swapModes}>
        <span>{(this.state.ampm==="PM")?this.state.hours:(this.state.hours-12)}</span><span className="colon">{this.state.colon}</span> 
        <span>{this.state.minutes}</span><span className="colon">{this.state.colon}</span> 
        <span>{this.state.seconds}</span>{this.state.ampm}
      </div> 
    );
}
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <DigitalClock timeType="12"/> */}
        <DigitalClockClass timeType={12}/>
      </div>
    );
  }
}

export default App;
