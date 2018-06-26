import React from "react";

export const FormBtn = props => (
  <button
    {...props}
    style={{
      float: "left",
      marginBottom: 100,
      backgroundColor: "#000",
      fontSize: 12,
      borderRadius: 0,
      border: "0px",
      padding: "12px 18px 12px 18px"
    }}
    className="btn btn-success"
  >
    {props.children}
  </button>
);
