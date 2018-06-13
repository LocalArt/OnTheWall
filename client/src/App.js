import React, { Component } from "react";
import { VendorName } from "./VendorName";
import { About } from "./About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <VendorName />
        {/* <About title="About Artist" /> */}
        <About title="About Venue" />
      </div>
    );
  }
}

export default App;
