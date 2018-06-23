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
      <div className="card">
        <img
          className="card-img-top"
          src="https://dg19s6hp6ufoh.cloudfront.net/pictures/613209425/large/PicassoBullsHead.jpeg?1491535886"
          alt="Card image cap"
        />

        <div className="card-body">
          <h5 className="card-artist">{this.props.name}</h5>
          <p className="card-location">
            {this.props.city}, {this.props.state}
          </p>
          <p className="card-title">Bull's Head</p>
          <button href="#" className="btn btn-primary btn-card">
            <Link to={"/artist/" + this.props.id}>Artist Bio</Link>
          </button>
          <button onClick={this.handleToggle}>Modal</button>
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
