import React from "react";

function DoneItem(props) {
  return (
    <div className="doneItemDiv itemDiv">
      <div className="itemContent blurEffect">
        <p className="itemTitle">{props.data} </p>
        <p className="itemDate">{props.date}</p>
      </div>
      <button
        className="bi bi-trash transpButtons text-danger"
        title="Delete Task"
        onClick={() => props.deleteDoneItemFun(props.id)}
      ></button>
    </div>
  );
}
export default DoneItem;
