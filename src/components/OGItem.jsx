import React from "react";

export const OGItem = (props) => {
  return (
    <div className="ogItemDiv itemDiv">
      <button className="bi bi-check-lg transpButtons text-success"></button>
      <div className="itemContent ">
        <p className="itemTitle">OG Item </p>
        <p className="itemDate">Date</p>
      </div>
      <button className="bi bi-trash transpButtons text-danger"></button>
    </div>
  );
};
