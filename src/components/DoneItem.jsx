import React from 'react'


export const DoneItem = () => {
  return (

    <div className="doneItemDiv itemDiv">
    <div className="itemContent "> <p className='itemTitle'>Done Item </p>
    <p className='itemDate'>Date</p>
    </div>
    <button className="bi bi-trash transpButtons text-danger"></button>
    
    </div>
  )
}
