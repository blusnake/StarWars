import React from 'react'
import './Button.css'

const Button = ({ children, onClick, value }) => {
  return (
      <button className='btn' onClick={onClick} value={value}>
        {children}
      </button>
  )
}

export default Button