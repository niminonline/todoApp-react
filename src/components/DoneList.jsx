import React from "react"

function DoneList(){

    return(
        <div className="listDiv doneList">
        <p className='listTitle'>Completed Tasks</p>
        <div className="doneItemDiv itemDiv">
      <div className="itemContent ">
        <p className="itemTitle strike">cooking </p>
        <p className="itemDate">Date</p>
      </div>
      <button className="bi bi-trash transpButtons text-danger"></button>
    </div>

        </div>
    )
}
export default DoneList
