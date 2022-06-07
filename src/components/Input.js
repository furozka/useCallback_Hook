import React, { useState } from 'react'

function Input(props) {
    const [color, setColor] = useState('')
    
  return (
    <>
    <div>
        <label>Color: </label>
        <input type='text' value={color} onChange={(e)=> setColor(e.target.value)}></input>
        <button onClick={()=> props.changeRectColor(color)}>Change</button>
        </div>
    </>
  )
}

export default Input