import React from "react";
import { Link } from "react-router-dom";
import "./SingleVenueCard.css";

const SingleVenueCard = props => (
  <div className="card" style={{ width: "90%" }}>
    {console.log("props.id= " + JSON.stringify(props))}
    <img
      className="card-img-top"
      style={{ height: "auto" }}
      src={props.url}
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-description">{props.description}</p>
      {/* <p className="card-title">Bull's Head</p> */}
      {/* <button href="#" className="btn btn-primary btn-card">
        <Link to={"/artist/" + props.id}>Artist Bio</Link>
      </button>
      <button href="#" className="btn btn-primary btn-card">
        <Link to={"/artist/" + props.id + "/contact/" + props.imageID}>
          Contact to Buy
        </Link>
      </button> */}
    </div>
  </div>
);

export default SingleVenueCard;
