import React from "react";

function OGList() {
  return (
    <div className="listDiv ogList">
      <p className="listTitle"> On Going Tasks</p>

      <div className="ogItemDiv itemDiv">
      <button className="bi bi-check-lg transpButtons text-success"></button>

      <div className="itemContent " key="element.id">
        <p className="itemTitle">washing</p>
        <p className="itemDate">date</p>
      </div>
      <button className="bi bi-trash transpButtons text-danger"></button>
    </div>


    </div>
  );
}

export default OGList;
