import React from 'react'

function Header() {
  let now=new Date();
  let period= now.getHours();

  console.log(period);

  switch(true)
  {
    case (period>=0 && period<12): period="Morning 🌤️";
    break;
    case (period>=12 && period<16): period="Afternoon ☀️";
    break;
    case (period>=16 && period<19): period="Evening 🌇";
    break;
    case (period>=19 && period<=23): period="Evening 🌙";
    break;

    default: period="Night"
  }
  console.log("Period= " + period);
  return (
    <div>
        <h2 className='siteTitle'> To do List </h2>
    <h5 className='siteSubTitle'> Hey, Good {period}... It's {now.toLocaleDateString("en-IN",{weekday:"long"})} </h5>
    </div>
  )
}

export default Header