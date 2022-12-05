import React, { useState } from "react";
import "../css/ogItem.css";

function OGItem(props) {
  const [editText, setEditText] = useState("");
  const [editPopupState, seteditPopupState] = useState(false);

  function editSaveBtn() {
    if (editText !== "") {
      props.editSaveFun(props.id, editText);
      seteditPopupState(false);
    } else alert("Please enter a Task");
  }

  return (
    <div className="ogItemDiv itemDiv">
      <button
        className="bi bi-check-lg transpButtons text-success"
        title="Task Finished"
        onClick={() => props.doneFun(props.id)}
      ></button>
      <div className="itemContent ">
        <p className="itemTitle">{props.data}</p>

        {editPopupState && (
          <div className="editPopup">
            <div className="closeBtnDiv">
              <button
                className="bi bi-x-circle-fill text-danger transpButtons closeBtn"
                title="Cancel"
                onClick={() => seteditPopupState(false)}
              ></button>
            </div>
            <div className="editFieldDiv ">
              <input
                type="text"
                className="editPopupText"
                onChange={(evnt) => setEditText(evnt.target.value)}
                onKeyDown={(evnt) => evnt.key === "Enter" && editSaveBtn()}
                value={editText}
              />
              <button
                className="fa-regular fa-floppy-disk transpButtons saveBtn "
                title="Save"
                onClick={editSaveBtn}
              ></button>
            </div>
          </div>
        )}

        <p className="itemDate">{props.date}</p>
      </div>
      {!editPopupState && (
        <div className="ogButtons">
          <div className="priority">
            <button className="priorityUp fa-solid fa-caret-up transpButtons" title="Increase Priority"
            onClick={()=>props.priorityUpFun(props.id)}></button>
            <p className="priorityNum" title="Priority">{props.priority}</p>
            <button className="priorityDown priorityUp fa-solid fa-caret-down transpButtons" title="Decrease Priority"
            onClick={()=>props.priority>0&&props.priorityDownFun(props.id)}></button>
          </div>

          <div className="editDlteButtonDiv">
            <button
              className="bi bi-pencil-square transpButtons text-secondary" title="Edit Task"
              onClick={() => seteditPopupState(true)}
            ></button>
            <button
              className="bi bi-trash transpButtons text-danger"
              title="Delete Task"
              onClick={() => props.deleteFun(props.id)}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OGItem;
