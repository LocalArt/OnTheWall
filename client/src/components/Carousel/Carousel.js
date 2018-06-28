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
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={
                  this.props.image[0] && this.props.image[0].url
                    ? this.props.image[0].url
                    : "http://raleighdesignlab.com/onthewall/no_image.jpg"
                }
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={
                  this.props.image[1] && this.props.image[1].url
                    ? this.props.image[1].url
                    : "http://raleighdesignlab.com/onthewall/no_image.jpg"
                }
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={
                  this.props.image[2] && this.props.image[2].url
                    ? this.props.image[2].url
                    : "http://raleighdesignlab.com/onthewall/no_image.jpg"
                }
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
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
