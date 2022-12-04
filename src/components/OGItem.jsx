import React, { useState } from "react";


function OGItem(props) {

  const[editText,setEditText]=useState("");
  const[editPopupState, seteditPopupState] = useState(false);

 

  function editSaveBtn(){
    if(editText!==""){
    //if(editText===undefined) {
    props.editSaveFun(props.id,editText);
    seteditPopupState(false);
    }
    else
    alert("Please enter a value");

  }


  return (
    

      <div className="ogItemDiv itemDiv">
      <button className="bi bi-check-lg transpButtons text-success" title="Task Finished"
      onClick={()=>props.doneFun(props.id)}></button>
      <div className="itemContent ">
        <p className="itemTitle">{props.data}</p>

        {editPopupState&&
        <div className="editPopup">
        <div className="closeBtnDiv">
        <button className="bi bi-x-circle-fill text-danger transpButtons closeBtn" title="Cancel" 
        onClick={()=>seteditPopupState(false)}></button>
        </div>
        <div className="editFieldDiv ">
        <input type="text" className="editPopupText" onChange={(evnt)=>setEditText(evnt.target.value)} 
        onKeyDown={(evnt)=>evnt.key==="Enter"&& editSaveBtn()} value={editText} />
        <button className="bi bi-check-lg transpButtons text-success saveBtn " title="Save" 
        onClick={editSaveBtn}></button>
        </div>
        </div>
        }

        <p className="itemDate">{props.date}</p>
      </div>
      {!editPopupState&&
      <div className="editDlteButtonDiv">
      <button className="bi bi-pencil-square transpButtons text-secondary" onClick={()=>seteditPopupState(true)} ></button>
      <button className="bi bi-trash transpButtons text-danger" title="Delete Task" onClick={()=>props.deleteFun(props.id)}></button>
      </div>
      }
    </div>


    
  );
}

export default OGItem;
