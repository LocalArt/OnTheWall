import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import SingleVenueCard from "../../components/SingleVenueCard";
import Jumbotron from "../../components/Jumbotron";
import About from "../../components/About";
import Hero from "../../components/Hero";
import VenueUpload from "../../components/VenueUpload";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./venueprofile.css";

class VenueProfile extends Component {
  state = {
    venue: { image: [] }
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("is it working?");

    API.getSingleVenue(this.props.match.params.id)
      .then(res => this.setState({ venue: res.data }))
      .catch(err => console.log(err));

    console.log(
      "this.match.params.id " + JSON.stringify(this.props.match.params)
    );
  }

  render() {
    return (
      <Container fluid>
        <div>
          <Hero
            className="venuehero"
            backgroundImage={
              this.state.venue.image && this.state.venue.image[0]
                ? this.state.venue.image[0].url
                : "http://raleighdesignlab.com/onthewall/green_header.jpg"
            }
          >
            <h1>{this.state.venue.venuename}</h1>
            <h2>
              {this.state.venue.city}, {this.state.venue.state}
            </h2>
            <button className="SignupBtn" style={{ height: "42px" }}>
              <a className="link" href="/artistSignup">
                Contact Venue <span className="sr-only">(current)</span>
              </a>
            </button>
          </Hero>
        </div>
        {/* VENUE UPLOAD!
        <VenueUpload userId={this.props.match.params.id} /> */}
        <Row>
          <Col size="md-1" />

          <Col className="bio-style" size="md-3">
            <article>
              <About
                name={this.state.venue.venuename}
                description={this.state.venue.description}
              />
              <VenueUpload userId={this.props.match.params.id} />
              {/* <p>{this.state.artist.biography}</p> */}
            </article>
          </Col>
          <Col size="md-8">
            {/* <Col size="md-2">
            <Link to="/">← Back to venue</Link>
          </Col> */}
            <div>
              {this.state.venue.image
                ? this.state.venue.image.map(image => (
                    <SingleVenueCard
                      url={image.url}
                      title={image.imageTitle}
                      description={image.description}
                      state={this.state.venue.state}
                      id={this.props.match.params.id}
                      imageID={image.imageID}
                    />
                  ))
                : "Nothing to add"}
            </div>
          </Col>
        </Row>
        <Row>
          <form>
            {/* <Input
              value={this.state.imageUrL}
              onChange={this.handleInputChange}
              name="imageUrl"
              placeholder="Image URL"
            /> */}
            {/* <Input
              value={this.state.imageTitle}
              onChange={this.handleInputChange}
              name="imageTitle"
              placeholder="Image Title"
            />

            <Input
              value={this.state.price}
              onChange={this.handleInputChange}
              name="price"
              placeholder="Price "
            />
            <Input
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
              placeholder="Description "
            /> */}
            {/* <VenueUpload /> */}
            {/* <FormBtn onClick={this.handleFormSubmit}>Submit Image</FormBtn> */}
          </form>
        </Row>
      </Container>
    );
  }
}

console.log("Michael is Cool");

export default VenueProfile;
