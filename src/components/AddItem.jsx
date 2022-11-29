import React, { useState } from 'react'

function AddItem() {

  const[task,settask]= useState("");
  // const[addTask,setAddTask]= useState[{}];


      
  return (
         
    <div className="addItemDiv">
    <input type="text" className='inputText' name="inputText" onChange={(evnt)=>settask(evnt.target.value)} placeholder='Add a task'  value={task}/>
    <button className="bi bi-eraser-fill transpButtons text-secondary" onClick={()=>settask("")} ></button> 
    <button className="bi bi-plus-lg transpButtons text-secondary" ></button> 
    
    </div>
  )
}

export default AddItem