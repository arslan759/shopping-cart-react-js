import React from 'react'
import "./link.css"

function Link({text , href , clr}) {
  return (
    <a style={{'color': `${clr}`}} href={href}>{text}</a>
  )
}

export default Link