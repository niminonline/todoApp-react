import React from "react"
import { DoneItem } from "./DoneItem"

function DoneList(){

    return(
        <div className="listDiv doneList">
        <p className='listTitle'>Completed Tasks</p>
        <DoneItem />

        </div>
    )
}
export default DoneList
