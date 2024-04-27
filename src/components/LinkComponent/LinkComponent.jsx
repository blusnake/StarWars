import React from 'react'
import { Link } from 'react-router-dom'

const LinkComponent = ({path, children}) => {
  return (
    <Link style={{textDecoration: 'none'}} to={path}>{children}</Link>
  )
}

export default LinkComponent