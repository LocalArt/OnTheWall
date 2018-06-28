import React from "react";
import { Link } from "react-router-dom";
import "./CarouselProp.css";
import ArtistModal from "../ArtModalBootstrap";

const CarouselProp = props => (
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={props.url} alt="First slide" />
    </div>
  </div>
);

export default CarouselProp;
