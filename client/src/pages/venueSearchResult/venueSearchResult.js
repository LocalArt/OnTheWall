import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../utils/API";

class VenueSearchResult extends Component {
    state = {
        venue: []
    };
    
      componentDidMount() {
        console.log("");
        API.getVenues()
          .then(res => this.setState({ venue: res.data }))
          .catch(err => console.log(err));
    }

    render() {
      return (
        <div className="row justify-content-center home-cards">
          {this.state.venue.map(venue => (
            <Card
              key={venue._id}
              id={venue._id}
              venuename={venue.venuename}
              city={venue.city}
              state={venue.state}
            />
          ))}
        </div>
      );
    }
  }
  
  export default VenueSearchResult;