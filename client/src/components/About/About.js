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
      {/* <p>{props.description}</p> */}
      <p style={bodyStyle}>
        {props.description}
        {/* Salvador Dalí was born on May 11, 1904, in Figueres, Spain. From an
        early age Dalí was encouraged to practice his art, and he would
        eventually go on to study at an academy in Madrid. In the 1920s, he went
        to Paris and began interacting with artists such as Picasso, Magritte
        and Miró, which led to Dalí's first Surrealist phase. He is perhaps best
        known for his 1931 painting The Persistence of Memory, showing melting
        clocks in a landscape setting. The rise of fascist leader Francisco
        Franco in Spain led to the artist's expulsion from the Surrealist
        movement, but that didn't stop him from painting. Dalí died in Figueres
        in 1989. */}
      </p>
    </div>
  </div>
);
