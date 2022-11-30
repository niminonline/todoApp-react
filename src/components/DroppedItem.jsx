import React from 'react'

function DroppedItem(props) {
  return (
   
    <div className= "droppedItemDiv itemDiv">
    <button className="bi bi-arrow-clockwise transpButtons text-primary"></button>
    <div className="itemContent "> <p className='itemTitle strike'>{props.data} </p>
    <p className='itemDate'>{props.date}</p>
    </div>
    <button className="bi bi-trash transpButtons text-danger"></button>
    </div>

       
  )
}

export default DroppedItem