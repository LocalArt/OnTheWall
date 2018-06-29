import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../utils/API";

class ArtistSearchResult extends Component {
    state = {
        artist: []
    };
    
    componentDidMount() {
      console.log("");

      API.getArtistByName(this.props.match.params.name)
        .then(res => this.setState({ artist: res.data }))
        .catch(err => console.log(err));
    }

  componentDidMount() {
    console.log("");
    API.getArtists()
      .then(res => this.setState({ artist: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row justify-content-center home-cards">
        {this.state.artist.map(artist => (
          <Card
            key={artist._id}
            image={artist.image}
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

export default ArtistSearchResult;
