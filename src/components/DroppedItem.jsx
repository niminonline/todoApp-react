import React from "react";

function DroppedItem(props) {
  return (
    <div className="droppedItemDiv itemDiv">
      <button
        className="bi bi-arrow-clockwise transpButtons text-primary"
        title="Retrieve Task"
        onClick={() => props.restoreFun(props.id)}
      ></button>
      <div className="itemContent blurEffect">
        {" "}
        <p className="itemTitle strike">{props.data} </p>
        <p className="itemDate">{props.date}</p>
      </div>
      <button
        className="bi bi-trash transpButtons text-danger"
        title="Delete Task"
        onClick={() => props.deleteFun(props.id)}
      ></button>
    </div>
  );
}

export default DroppedItem;
