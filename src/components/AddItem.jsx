import React, { useState } from "react";
import { OGItem } from "./OGItem";

function AddItem() {
  const [task, settask] = useState("");
  const [addTask, setAddTask] = useState([{}]);

  function addBtnAction() {
    
     setAddTask([...addTask, { id: Date.now(), data: task, date: new Date().toLocaleDateString("en-IN") }]);
    console.log(Date.now() + " "+new Date().toLocaleDateString("en-IN") );
    OGItem.updateOgArray(Date.now(), task, new Date().toLocaleDateString("en-IN"));
  }

 

  return (
    <div className="addItemDiv">
      <input
        type="text"
        className="inputText"
        name="inputText"
        onChange={(evnt) => settask(evnt.target.value)}
        placeholder="Add a task"
        value={task}
      />
      <button
        className="bi bi-eraser-fill transpButtons text-secondary"
        onClick={() => settask("")}
      ></button>
      <button
        className="bi bi-plus-lg transpButtons text-secondary"
        onClick={addBtnAction}
      ></button>
    </div>
  );
}

export default AddItem;
