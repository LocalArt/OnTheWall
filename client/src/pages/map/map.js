import React from "react";
import "./map.css";
import { Col, Row, Container } from "../../components/Grid";
import HeroSignup from "../../components/HeroSignup";

/* import About from "../../components/About"; */

const Map = () => (
  <div className="home-page">
    <HeroSignup />
    <Row>
      <Col size="lg-3" />

      <Col size="lg-6">
        <h1 className="mapHeader">Find Artist Near You</h1>
        {/* <About
      title={"FlipArtWall Production"}
      bioscription={"By Andy, Bob, Clay, Marina, and Muhammad"}
    />  */}
        <p className="mapText">
          Search the map to find out where in Raleigh artist are showcasing
          their work. Check out the calendar to see when your favorite artist
          will be displaying their work and if they are scheduled to host a
          gallery night.
        </p>
      </Col>
      <Col size="lg-12">
        <img
          style={{
            boxShadow: "5px 10px 10px #888",
            marginLeft: "30px",
            width: "96%",
            height: "800px",
            border: "1px solid #999"
          }}
          className="mapImage"
          src="http://raleighdesignlab.com/onthewall/otw_map.jpg"
        />
      </Col>
    </Row>
  </div>
);

export default Map;
