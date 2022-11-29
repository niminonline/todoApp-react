import React from 'react'
import { DroppedItem } from './DroppedItem'

function DroppedList() {
  return (
    <div className="listDiv droppedList">
    <p className='listTitle'> Deleted Tasks</p>
    <DroppedItem />

        </div>
  )
}

export default DroppedList