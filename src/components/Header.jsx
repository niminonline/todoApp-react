import React from 'react'

function Header() {
  return (
    <div>
        <h2> To do List </h2>
    <h3> Hey, It's {new Date().toLocaleDateString("en-IN",{weekday:"long"})} </h3>
    </div>
  )
}

export default Header