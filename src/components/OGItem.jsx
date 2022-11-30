import React from "react";

function OGItem(props) {
  return (
    

      <div className="ogItemDiv itemDiv">
      <button className="bi bi-check-lg transpButtons text-success"></button>
      <div className="itemContent ">
        <p className="itemTitle">{props.data}</p>
        <p className="itemDate">{props.date}</p>
      </div>
      <button className="bi bi-trash transpButtons text-danger"></button>
    </div>


    
  );
}

export default OGItem;
