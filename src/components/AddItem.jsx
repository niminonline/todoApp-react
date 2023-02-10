import React, { useState } from "react";
import "../css/addItem.css"

function AddItem(props) {
  const [task, settask] = useState("");

  function addBtnAction() {
    task !== "" ? props.addItemfun(task) : alert("Enter a task");
    settask("");
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
        onKeyDown={(evnt) => evnt.key === "Enter" && addBtnAction()}
      />
      <button
        className="bi bi-eraser-fill transpButtons text-secondary"
        title="Clear Field"
        onClick={() => settask("")}
      ></button>
      <button
        className="bi bi-plus-lg transpButtons text-secondary"
        title="Add Task"
        onClick={addBtnAction}
      ></button>
    </div>
  );
}

export default AddItem;
