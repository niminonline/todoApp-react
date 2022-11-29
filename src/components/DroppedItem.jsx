import React from 'react'

export const DroppedItem = () => {
  return (
    <div className= "droppedItemDiv itemDiv">
    <button className="bi bi-arrow-clockwise transpButtons text-primary"></button>
    <div className="itemContent "> <p className='itemTitle strike'>Dropped Item </p>
    <p className='itemDate'>Date</p>
    </div>
    <button className="bi bi-trash transpButtons text-danger"></button>
    </div>
  )
}
