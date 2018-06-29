import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../utils/API";

class ArtistCitySearchResult extends Component {
    state = {
        artist: []
    };
    
    componentDidMount() {
      console.log("");

      API.getArtistByCity(this.props.match.params.city)
        .then(res => this.setState({ artist: res.data }, () => console.log("State was updated in artist search", this.state.artist)))
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

export default ArtistCitySearchResult;