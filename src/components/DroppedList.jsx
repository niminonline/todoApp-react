import React from 'react'

function DroppedList() {
  return (
    <div className="listDiv droppedList">
    <p className='listTitle'> Deleted Tasks</p>
    <div className= "droppedItemDiv itemDiv">
    <button className="bi bi-arrow-clockwise transpButtons text-primary"></button>
    <div className="itemContent "> <p className='itemTitle strike'>cleaning </p>
    <p className='itemDate'>Date</p>
    </div>
    <button className="bi bi-trash transpButtons text-danger"></button>
    </div>

        </div>
  )
}

export default DroppedList