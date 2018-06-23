import React from "react";

const divStyle = {
  float: "left",
  padding: "12px"
};

const About = props => (
  <div style={divStyle}>
    <h3>{props.title}</h3>
    <p>{props.bioscription}</p>
  </div>
);

export default About;
