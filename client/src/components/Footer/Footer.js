import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import "./Jumbotron.css";

const divStyle = {
  color: "white",
  padding: "20px",
  position: "sticky-bottom",
  width: "100%",
  backgroundColor: "black",
  height: "100px",
  marginTop: "50px"
};

const Footer = props => (
  <div className="Footer text-center">
    <div style={divStyle}>
      <h5 className="footerStyle">ON THE WALL</h5>
      <h6 className="footerStyle2">
        &copy;2018 ON THE WALL Created by Andy &nbsp;|&nbsp; Bob &nbsp;|&nbsp;
        Clay &nbsp;|&nbsp; Marina &nbsp;|&nbsp; and Muhammad
      </h6>
    </div>
  </div>
);

/* export const About = props => (
  <div style={divStyle}>
    <h3>{props.title}</h3>
  </div>
); */

export default Footer;
