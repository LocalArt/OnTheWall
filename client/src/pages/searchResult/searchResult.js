import React, { Component } from "react";

class SearchResult extends Component {
    
    render() {
      return (
        <div className="row justify-content-center home-cards">
          {this.state.artist.map(artist => (
            <Card
              key={artist._id}
              id={artist._id}
              name={artist.name}
              city={artist.city}
              state={artist.state}
            />
          ))}
        </div>
      );
    }
  }
  
  export default SearchResult;