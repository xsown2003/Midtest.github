import React from 'react'
import { useState } from 'react';
import './MiniContent.css';
import Click from './Click'
const MiniContent = (props) => {
  const [showContent,setShowConten] = useState (false);
  return (
    <div className='all-mini'>
      {showContent && <Click close={()=>{setShowConten(false)}}>
        <div className='change-click'>        
          <img src={props.image}></img>
          <p><b>Name:</b> {props.name}</p>
          <p><b>Episode:</b>{props.episode}</p>
          <p><b>Description:</b>{props.description}</p>
          </div>
      </Click>}
      <div className='img'>
        <img src={props.image} onClick={()=>{setShowConten(true)}}></img>
      </div>
      <div className='epi'>
        <div className='mini-class'>
      <div className='change-epi'>
        <p>{props.class}</p>
        <p><b>{props.name}</b></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MiniContent;