import React from 'react'
import './LoadingSpinner.css'

function LoadingSpinner() {
  return (
<figure>
    <div className="dot white"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
</figure>
  )
}

export default LoadingSpinner