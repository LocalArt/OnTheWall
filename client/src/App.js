// import React, { Component } from "react";
// import { VendorName } from "./VendorName";
// import { About } from "./About";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <VendorName />
//         {/* <About title="About Artist" /> */}
//         <About title="About Venue" />
//       </div>
//     );
//   }
// }

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Artist from "./pages/artist";
import Images from "./pages/images";
import Home from "./pages/home";
import Venues from "./pages/venue";
import VenueSignUp from "./pages/venueSignup";
import Contact from "./pages/contact";
import ArtistSignUp from "./pages/artistSignup";
import ArtistSearchResult from "./pages/artistSearchResult";
import VenueSearchResult from "./pages/artistSearchResult";
import VenueProfile from "./pages/venueprofile";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
/* import Footer from "./components/Footer"; */

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={Books} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/artist/:id" component={Artist} />

        <Route path="/artist/:id/contact" component={Contact} />
        <Route path="/im/:id/contact" component={Contact} />

        <Route exact path="/image" component={Images} />
        <Route path="/image/:id/:imageID" component={Images} />
        <Route exact path="/artistsignup" component={ArtistSignUp} />
        <Route exact path="/venuesignup" component={VenueSignUp} />
        <Route exact path="/allvenues" component={Venues} />
        <Route exact path="/venue/:id" component={VenueProfile} />
        <Route
          exact
          path="/artistSearchResult"
          component={ArtistSearchResult}
        />
        <Route exact path="/venueSearchResult" component={VenueSearchResult} />
        {/* <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
