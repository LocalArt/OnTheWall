import React from "react";

const divStyle = {
  float: "left",
  padding: "12px"
};

export const About = props => (
  <div style={divStyle}>
    <h3>{props.title}</h3>
    <p>lorem epsom</p>
  </div>
);
