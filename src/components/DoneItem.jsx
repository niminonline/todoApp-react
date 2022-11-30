import React from "react"

function DoneItem(){

    return(
        
        <div className="doneItemDiv itemDiv">
      <div className="itemContent ">
        <p className="itemTitle strike">cooking </p>
        <p className="itemDate">Date</p>
      </div>
      <button className="bi bi-trash transpButtons text-danger"></button>
    </div>

      
    )
}
export default DoneItem
