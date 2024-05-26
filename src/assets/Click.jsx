import React from 'react'
import './Click.css'
const Click = (props) => {
  return (
    <div className='click'>
        <div className='close'>
          <div className='header'>
            <button onClick={
              props.close
            }>X</button>
        {props.children}
          </div>
        </div>
    </div>
  )
}

export default Click