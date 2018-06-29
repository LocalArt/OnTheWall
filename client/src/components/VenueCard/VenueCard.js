import React from "react";
import { Link } from "react-router-dom";
import "./VenueCard.css";
import ArtistModal from "../ArtModalBootstrap";

class VenueCard extends React.Component {
  state = {
    show: false
  };

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={
            this.props.image[0] && this.props.image[0].url
              ? this.props.image[0].url
              : "http://raleighdesignlab.com/onthewall/no_image.jpg"
          }
          alt="Card image cap"
        />

        <div className="card-body">
          <h5 className="card-artist">{this.props.name}</h5>
          <p className="card-location">
            {this.props.city}, {this.props.state}
          </p>
          {/* <p className="card-title">Bull's Head</p> */}
          <button href="#" className="buttonBio">
            <Link to={"/venue/" + this.props.id}>Venue Bio</Link>
          </button>
          {/* <button onClick={this.handleToggle}>Modal</button> */}
          {/* <ArtistModal
            handleToggle={this.handleToggle}
            show={this.state.show}
          /> */}
        </div>
      </div>
    );
  }
}

export default VenueCard;
