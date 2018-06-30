import React from "react";
import { Col, Row, Container } from "../../components/Grid";
/* import About from "../../components/About"; */

const OurStory = () => (
  <div className="home-page">
    <Row>
      <Col size="lg-1" />
      <Col size="lg-5">
        <h1>All you want to know about this site!</h1>
        {/* <About
      title={"FlipArtWall Production"}
      bioscription={"By Andy, Bob, Clay, Marina, and Muhammad"}
    />  */}
        <p>
          We are FlipArtWall, creators of Flippity Flop, Flipper's favorite
          Flash Card App. Now we have built OnTheWall, a React App for Artists
          and Venue Owners to connect. Artists want to display their art to
          potential customers. Venue Owners want decorative and interesting art
          on the walls and in their place of business. We help both of them by
          facilitating introductions to each other.
        </p>
        <p>
          At the home page users are welcomed into a world of beautiful
          possibility - "What wonderful and unique items can I display at low or
          no cost?" or "Where will my life's work go to be appreciated and
          eventually purchased?"
        </p>
      </Col>
      <Col size="lg-5" />
    </Row>
  </div>
);

export default OurStory;
