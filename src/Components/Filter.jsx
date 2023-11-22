import React from 'react'
import "../index.css"

export default function Filter({name, active, handleClick}) {
  return (
      <button onClick={handleClick} className={`filter-button ${active ? "active" : ""}`}>{name}</button>
  )
}
