import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import HeroSignup from "../../components/HeroSignup";

/* import About from "../../components/About"; */

const OurStory = () => (
  <div className="home-page">
    <HeroSignup />
    <Row>
      <Col size="lg-1" />
      <Col size="lg-5">
        <h1 style={{ fontFamily: "Oswald", paddingTop: "20px" }}>
          About On The Wall
        </h1>
        {/* <About
      title={"FlipArtWall Production"}
      bioscription={"By Andy, Bob, Clay, Marina, and Muhammad"}
    />  */}
        <p style={{ paddingBottom: "20px" }}>
          On The Wall was created to connect artist and venues – and vice versa.
        </p>
        <h4>
          <b style={{ fontFamily: "Oswald" }}>For Artists</b>
        </h4>
        <p>
          <b>
            Looking for that perfect venue to show your art? Tired of paying
            super high commissions? Ready to get discovered?
          </b>
        </p>
        <p>
          No longer is the days of going door to door trying to find a
          restaurant or bar or coffee shop that wants to show your art. Here at
          On The Wall not only can you search for that perfect venue to match
          your style, but venues can also find you! Check you favorite venue's
          calendar to see their avalability and schedule your next show!
        </p>
        <p>
          What about sales? Anyone can buy your art right off the venue wall via
          your On The Wall page. Just put up our easy to print labels with QR
          codes customized to each of your pieces of art. Your customers can
          scan, buy and go home with their new favorite piece of art.
        </p>

        <h4 style={{ paddingTop: "20px" }}>
          <b style={{ fontFamily: "Oswald" }}>For Venues</b>
        </h4>
        <p>
          <b>
            Are your walls bare? Are you looking for the next hot artist to
            bring customers in? Or just want to change up the feel of your
            venue?
          </b>
        </p>
        <p>
          You're in the perfect place to find the right artist for you. Browse
          local artists and check their avalability to show at your venue. The
          typical show length is 1-2 months, but that is up to you and the
          artist! Just shoot them a message if you think they are the perfect
          artist for your space.
        </p>
        <p>
          Your customers will be able to buy the art right off the wall! They
          can purchase via our mobile website and you will be notified of the
          sale so they can take their art home with them.
        </p>
      </Col>
      <Col size="lg-5">
        <img
          style={{ paddingTop: "30px" }}
          src="http://www.raleighdesignlab.com/onthewall/about_frame.png"
        />
      </Col>
    </Row>
  </div>
);

export default OurStory;
