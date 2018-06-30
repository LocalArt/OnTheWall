import React, { Component } from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  state = {
    artist: []
  };

  componentDidMount() {
    console.log("");
    API.getArtists()
      .then(res => this.setState({ artist: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="home-page">
        {/* <div className="row justify-content-center">
          <button type="button" className="btn btn-outline-primary btn-host">
            <Link to={"/venuesignup"}> Become an Host</Link>
          </button>
          <button type="button" className="btn btn-outline-primary btn-artist">
            <Link to={"/artistsignup"}> Become an Artist</Link>
          </button>
        </div> */}

        <Hero backgroundImage="http://raleighdesignlab.com/onthewall/OTW_bg.jpg">
          <h1>ON THE WALL</h1>
          <h2>Where artists and venues connect </h2>
          <a className="link" href="/artistSignup">
            <button className="SignupBtn" style={{ height: "42px" }}>
             Artist Signup <span className="sr-only">(current)</span>
            </button>
          </a>
          <a className="link" href="/venueSignup">
            <button className="SignupBtn" style={{ height: "42px" }}>
               Venue Signup <span className="sr-only">(current)</span>
            </button>
          </a>
        </Hero>
        <div className="row justify-content-center home-cards">
          {this.state.artist.map(artist => (
            <Card
              image={artist.image}
              key={artist._id}
              id={artist._id}
              name={artist.name}
              city={artist.city}
              state={artist.state}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
