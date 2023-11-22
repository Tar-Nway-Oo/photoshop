import React from 'react'
import "../index.css"

export default function Image({style, image}) {

   return (
   <div>
     <img className="image" style={style} src={image} alt="image" />
   </div>
  )
}
