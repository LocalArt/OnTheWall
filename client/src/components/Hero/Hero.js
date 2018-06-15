import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1> {artistName} </h1>
    <h2> {artistCity}, {artistState} </h2>
    <a
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   href="http://www.recipepuppy.com/about/api/"
    >
    //   Powered by Recipe Puppy
    </a>
  </div>
);

export default Jumbotron;
