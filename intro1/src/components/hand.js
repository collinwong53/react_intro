import React from 'react';
import './hand.css'
const Hand = (props) => {
    const handStyle = {
      transform: `rotateZ(${props.angle}deg)`,
      width:props.size/2+'%',
      backgroundColor:props.color
    }
    return(
      <div className='hand' style={handStyle}/>
    )
}

export default Hand;