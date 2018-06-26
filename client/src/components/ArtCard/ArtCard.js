import React from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";

const ArtCard = props => (
  <div className="card">
    {console.log("props.id= " + JSON.stringify(props))}
    <img className="card-img-top" src={props.url} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-description">{props.description}</p>
      {/* <p className="card-title">Bull's Head</p> */}
      <button href="#" className="buttonExpand">
        <Link to={"/artist/" + props.id}>Expand</Link>
      </button>
<<<<<<< HEAD
      <button href="#" className="buttonBuy">
        <Link to={"/artist/" + props.id + "/contact/" + props.title}>
=======
      <button href="#" className="btn btn-primary btn-card">
        <Link to={"/artist/" + props.id + "/contact/" + props.imageID}>
>>>>>>> 8106980b17aeb370e66256ab60acd15681a3a796
          Contact to Buy
        </Link>
      </button>
    </div>
  </div>
);

export default ArtCard;
