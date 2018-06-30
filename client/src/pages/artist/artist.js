import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import ArtCard from "../../components/ArtCard";
import Jumbotron from "../../components/Jumbotron";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Upload from "../../components/Upload";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./artist.css";

class Artist extends Component {
  state = {
    artist: { image: [] }
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("");

    API.getSingleArtist(this.props.match.params.id)
      .then(res => this.setState({ artist: res.data }))
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
            backgroundImage={
              this.state.artist.image == false
                ? "http://raleighdesignlab.com/onthewall/no_image.jpg"
                : this.state.artist.image[0].url
            }
          >
            <h1>{this.state.artist.name}</h1>
            <h2>
              {this.state.artist.city}, {this.state.artist.state}
            </h2>
            <button
              className="SignupBtn"
              style={{
                paddingRight: "32px",
                paddingLeft: "32px",
                paddingBottom: "30px",
                paddingTop: "8px",
                height: "36px"
              }}
            >
              <Link
                to={"/artist/" + this.state.artist._id + "/contact/"}
                className="link"
              >
                Contact Artist
              </Link>
            </button>
          </Hero>
        </div>
        <Upload userId={this.props.match.params.id} />
        <Row>
          <Col size="lg-1" />

          <Col size="lg-3">
            <div className="bio-style">
              <article>
                <About
                  name={this.state.artist.name}
                  description={this.state.artist.biography}
                />
                {/* <p>{this.state.artist.biography}</p> */}
              </article>
            </div>
          </Col>
          <Col size="lg-8">
            <div className="flex-display">
              {this.state.artist.image
                .slice(0)
                .reverse()
                .map(image => (
                  <ArtCard
                    url={image.url}
                    title={image.imageTitle}
                    description={image.description}
                    state={this.state.artist.state}
                    id={this.props.match.params.id}
                  />
                ))}
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
            {/* <Upload /> */}
            {/* <FormBtn onClick={this.handleFormSubmit}>Submit Image</FormBtn> */}
          </form>
        </Row>
      </Container>
    );
  }
}

console.log("Michael is Cool");

export default Artist;

// const Artist = () => (
//   <div>
//     <Hero backgroundImage="https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/hm_e16dcdfe62d081b7_spcms.jpg?itok=MZslClZ9">
//       <h1>PABLO PICASSO</h1>
//       <h2>Raleigh, NC </h2>
//     </Hero>

//     <h1>HOLD FOR ARTIST PAGE YO!!!!!!!</h1>
//   </div>
// );

// export default Artist;
