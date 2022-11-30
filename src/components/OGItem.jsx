import React, {useState} from "react";

export const OGItem = (props) => {

  const[ogItemArr,setogItemArr]= useState([{}]);
  
  function updateOgArray(id,data,date){

    setogItemArr([...ogItemArr,{id:props.id,data:props.data,date:props.date}])
  }


  return (
    <div className="ogItemDiv itemDiv">
      <button className="bi bi-check-lg transpButtons text-success"></button>

      {ogItemArr.map((element)=> (
      <div className="itemContent " key="element.id">
        <p className="itemTitle">{element.data} </p>
        <p className="itemDate">{element.date}</p>
      </div>))}
      <button className="bi bi-trash transpButtons text-danger"></button>
    </div>
  );
};
