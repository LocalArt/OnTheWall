import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
  fontFamily: "Oswald",
  fontWeight: 700,
  fontSize: "16px",
  marginTop: "30px"
};

const bodyStyle = {
  fontSize: "14px"
};

export default props => (
  <div>
    <div style={divStyle}>
      <h4>{props.name}'s Bio</h4>
    </div>
    <div>
      <p style={bodyStyle}>{props.description}</p>
    </div>
  </div>
);
