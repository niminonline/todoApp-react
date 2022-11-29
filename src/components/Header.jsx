import React from 'react'

function Header() {
  return (
    <div>
        <h2 className='siteTitle'> To do List </h2>
    <h5 className='siteSubTitle'> Hey, It's {new Date().toLocaleDateString("en-IN",{weekday:"long"})} </h5>
    </div>
  )
}

export default Header