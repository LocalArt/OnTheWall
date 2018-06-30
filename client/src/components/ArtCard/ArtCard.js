import React from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";
import ArtistProfileModal from "../ArtistProfileModal";

// const ArtCard = props => (

class ArtCard extends React.Component {
  state = {
    show: false
  };

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="card flex-card">
        {console.log("props.id= " + JSON.stringify(this.props))}
        <img
          className="card-img-top"
          src={this.props.url}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-price">${this.props.image.price}</p>
          <p className="card-description">{this.props.description}</p>
          {/* <p className="card-title">Bull's Head</p> */}
          {/* <button className="buttonModal" onClick={this.handleToggle}>
         Expand
      </button> */}
          <Link
            to={"/artist/" + this.props.id + "/contact/" + this.props.title}
          >
            <button href="#" className="buttonBuy">
              Contact to Buy
            </button>
          </Link>
          <button className="buttonModal" onClick={this.handleToggle}>
            View
          </button>
          <ArtistProfileModal
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

export default ArtCard;
