import React from 'react'
import './Clickweather.css'
const Clickweather = (props) => {
  return (
    <div className='all-click1'>
        <div className='click1'>
            <div className='click-button'>
                <button onClick={()=>{
                    props.click()
                }}>X</button>
        {props.children}
            </div>
        </div>
    </div>
  )
}

export default Clickweather