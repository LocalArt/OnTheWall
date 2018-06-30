import React from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";
import ArtistModal from "../ArtModalBootstrap";


const ArtCard = props => (
  <div className="card flex-card">
    {console.log("props.id= " + JSON.stringify(props))}
    <img className="card-img-top" src={props.url} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-description">{props.description}</p>
      {/* <p className="card-title">Bull's Head</p> */}
       {/* <button className="buttonModal" onClick={this.handleToggle}>
         Expand
      </button> */}
      <Link to={"/artist/" + props.id + "/contact/" + props.title}>
         <button href="#" className="buttonBuy">
             Contact to Buy
          </button>
      </Link>
    </div>
  </div>
);

export default ArtCard;
