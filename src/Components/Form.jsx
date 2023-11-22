import React from 'react'
import "../index.css"

export default function Form({input, handleInput, changeImage}) {
  return (
    <div>
      <input className='input' value={input} type="text" placeholder="add image's link" onChange={handleInput} />
      <button className='button' onClick={changeImage}>Submit</button>
    </div>
  )
}
