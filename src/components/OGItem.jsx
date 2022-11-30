import React from "react";

function OGItem(props) {

  function deleteBtnAction(){
    props.deleteFun(props.id);

  }


  return (
    

      <div className="ogItemDiv itemDiv">
      <button className="bi bi-check-lg transpButtons text-success" onClick={()=>props.doneFun(props.id)}></button>
      <div className="itemContent ">
        <p className="itemTitle">{props.data}</p>
        <p className="itemDate">{props.date}</p>
      </div>
      <button className="bi bi-trash transpButtons text-danger" onClick={deleteBtnAction}></button>
    </div>


    
  );
}

export default OGItem;
