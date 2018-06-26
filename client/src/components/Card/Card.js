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
          src="https://dg19s6hp6ufoh.cloudfront.net/pictures/613209425/large/PicassoBullsHead.jpeg?1491535886"
          alt="Card image cap"
        />

        <div className="card-body">
          <plaintext className="card-title-home">Bull's Head</plaintext>

          <plaintext className="card-artist-home">
            by: {this.props.name}
          </plaintext>
          <plaintext className="card-location">
            {this.props.city}, {this.props.state}
          </plaintext>
          <button href="#" className="buttonBio">
            <Link to={"/artist/" + this.props.id}>Artist Bio</Link>
          </button>
          <button className="buttonModal" onClick={this.handleToggle}>
            Modal
          </button>
          <ArtistModal
            handleToggle={this.handleToggle}
            show={this.state.show}
          />
        </div>
      </div>
    );
  }
}

export default Card;
