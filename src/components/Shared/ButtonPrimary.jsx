import React, { Children } from 'react'

const ButtonPrimary = ({children, handler}) => {
  return (
    <button onClick={handler} className="login-btn">{children}</button>
  )
}

export default ButtonPrimary