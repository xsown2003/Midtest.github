import React from 'react'
import { useState } from 'react'
import './Content.css'
import Clickweather from './Clickweather'
const Content = (props) => {
  const [showWeather,setShowWeater]=useState(false)
  return (
    <div className='both-content'>   
    {
      showWeather && <Clickweather click={()=>{
        setShowWeater(false);
      }}>
        <div className='weather-change'>
        <img src={props.image} width='300px' height='200px'></img>
        <p><b>Name:</b>{props.name}</p>
        <p><b>Episode:</b>{props.episode}</p>
        <p><b>Description:</b>{props.description}</p>
        </div>
        </Clickweather> 
    }
    <div className='title'>
        <h1>Anonime</h1>
        <p><a href='#'>Home</a></p>
        <p><a href='#'>List anime</a></p>
        <input placeholder='Search anime or movie' type='text'></input>
    </div>
    <div className='explore'>
        <h2>Explore</h2>
        <p className='color-what'>What are you gonna watch today ?</p>
        <p>
          <img src={props.image} onClick={()=>{
            setShowWeater(true);
          }}></img>  
          {/*<div className='change-weather'>
          <p className='weather-name'><b>{props.name}</b></p> 
          <p className='weather-content'> Corrupt politicians, frenzied nationalists, and other warmongering <p></p>forces constantly jeopardize the thin veneer of peace between<p></p> neighboring countries Ostania and Westalis. </p>
          </div> */}
          <div className='footer'>
         <h1>New Release</h1>
          {props.children}
          </div>
        </p>       
        </div> 
</div>
  )
}

export default Content