import React from "react";
import "./DeleteCartItemButton.css";

const DeleteCartItemButton = ({ onClick, value }) => {
  return (
    <>
      <button className="custom-btn btn-8" onClick={onClick}>
        <span>{value}</span>
      </button>
    </>
  );
};

export default DeleteCartItemButton;
