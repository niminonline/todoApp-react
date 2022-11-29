import React from 'react'

function AddItem() {

      
  return (

            
    <div className="addItemDiv">
    <input type="text" className='inputText' placeholder='Add a task' name="inputText"/>
    <button className="bi bi-eraser-fill transpButtons text-secondary"  ></button> 
    <button className="bi bi-plus-lg transpButtons text-secondary" ></button> 
    
    </div>
  )
}

export default AddItem