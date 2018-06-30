import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import ArtistModal from "../ArtModalBootstrap";

class Card extends React.Component {
  state = {
    show: false
  };

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="card flex-card">
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
          <plaintext className="card-title-home">
            {this.props.image[0] && this.props.image[0].imageTitle
              ? this.props.image[0].imageTitle
              : "No Art Registerd"}
          </plaintext>

          <plaintext className="card-artist-home">
            by: {this.props.name}
          </plaintext>
          <plaintext className="card-location">
            {this.props.city}, {this.props.state}
          </plaintext>
          <plaintext className="card-artist-home">
            {this.props.image[0] && this.props.image[0].price
              ? "$" + this.props.image[0].price
              : ""}
          </plaintext>
          <Link to={"/artist/" + this.props.id}>
            <button href="#" className="buttonBio">Artist Bio</button>
          </Link>
          <button className="buttonModal" onClick={this.handleToggle}>
            View
          </button>
          <ArtistModal
            handleToggle={this.handleToggle}
            show={this.state.show}
            image={this.props.image}
            id={this.props.id}
            name={this.props.name}
          />
        </div>
      </div>
    );
  }
}

export default Card;
