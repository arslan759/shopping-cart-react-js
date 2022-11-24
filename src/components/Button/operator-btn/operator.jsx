import React from 'react'
import "./operator.css"

function OperatorBtn({operator , onClick}) {
  return (
    <button onClick={onClick} className='operator' >{operator}</button>
  )
}

export default OperatorBtn