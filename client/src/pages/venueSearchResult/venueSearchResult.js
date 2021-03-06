import React, { Component } from "react";
import { Link } from "react-router-dom";
import VenueCard from "../../components/VenueCard";
import Hero from "../../components/Hero";
import API from "../../utils/API";
import "./venueSearchResult.css";

class VenueSearchResult extends Component {
  state = {
    venues: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("");

    // API.getVenues()
    //   .then(res => this.setState({ venues: res.data }))
    //   .catch(err => console.log(err));
    API.getSingleVenueByName(this.props.match.params.name)
      .then(res =>
        this.setState({ venues: res.data }, () =>
          console.log("State was updated in venue search", this.state.venues)
        )
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="home-page home-bg">
        <div className="row justify-content-center home-cards home_bg">
          {this.state.venues.map(venues => (
            <VenueCard
              image={venues.image}
              key={venues._id}
              id={venues._id}
              name={venues.venuename}
              city={venues.city}
              state={venues.state}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default VenueSearchResult;
