import React from 'react'

export const DroppedItem = () => {
  return (
    <div className= "droppedItemDiv itemDiv">
    <button className="bi bi-arrow-clockwise transpButtons text-primary"></button>
    <p className='itemName'>Dropped Item </p>
    <button className="bi bi-trash transpButtons text-danger"></button>
    </div>
  )
}
