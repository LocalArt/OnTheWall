import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import VenueCard from "../../components/VenueCard";
import Jumbotron from "../../components/Jumbotron";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Upload from "../../components/Upload";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Venues extends Component {
  state = {
    venues: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("");

    API.getVenues()
      .then(res => this.setState({ venues: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="home-page">
        <div className="row justify-content-center">
          <button type="button" className="btn btn-outline-primary btn-host">
            <Link to={"/venuesignup"}> Become an Host</Link>
          </button>
          <button type="button" className="btn btn-outline-primary btn-venues">
            <Link to={"/venuessignup"}> Become an venues</Link>
          </button>
        </div>

        <Hero backgroundImage="http://raleighdesignlab.com/onthewall/venue_header.jpg">
          <h1>ON THE WALL</h1>
          <h2>Where Artist and Venues Connect </h2>
        </Hero>
        <div className="row justify-content-center home-cards">
          {this.state.venues.map(venues => (
            <VenueCard
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
export default Venues;
