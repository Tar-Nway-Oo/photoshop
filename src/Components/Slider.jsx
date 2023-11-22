import React from 'react'
import "../index.css"

export default function Slider({value, min, max, handleChange}) {
  return (
    <div className='slider'>
      <input type="range" value={value} min={min} max={max} onChange={handleChange} className="slider-input" />
    </div>
  )
}
