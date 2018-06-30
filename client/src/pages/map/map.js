import React from "react";
import "./map.css";
/* import About from "../../components/About"; */

const Map = () => (
  <div className="bio-style">
    <h1 className="mapHeader">Find Artist Near You</h1>
    {/* <About
      title={"FlipArtWall Production"}
      bioscription={"By Andy, Bob, Clay, Marina, and Muhammad"}
    />  */}
    <p className="mapText">
      Search the map to find out where in Raleigh artist are showcasing their
      work. Check out the calendar to see when your favorite artist will be
      displaying their work and if they are scheduled to host a gallery night.
    </p>
    <img
      className="mapImage"
      src="http://raleighdesignlab.com/onthewall/otw_map.jpg"
    />
  </div>
);

export default Map;
