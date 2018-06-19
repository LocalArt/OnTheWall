import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <img
      className="card-img-top"
      src="https://dg19s6hp6ufoh.cloudfront.net/pictures/613209425/large/PicassoBullsHead.jpeg?1491535886"
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-artist">{props.name}</h5>
      <p className="card-location">
        {props.city}, {props.state}
      </p>
      <p className="card-title">Bull's Head</p>
      <a href="#" className="btn btn-primary btn-card">
        Buy now
      </a>
    </div>
  </div>
);

export default Card;
