import React, { Component } from "react";
import VenueCard from "../../components/VenueCard";
import API from "../../utils/API";

class VenueCitySearchResult extends Component {
    state = {
        venues: []
      };
      // When this component mounts, grab the book with the _id of this.props.match.params.id
      // e.g. localhost:3000/books/599dcb67f0f16317844583fc
      componentDidMount() {
        console.log("");
    
        // API.getVenues()
        //   .then(res => this.setState({ venues: res.data }))
        //   .catch(err => console.log(err));
        API.getVenueByCity(this.props.match.params.city)
          .then(res => this.setState({ venues: res.data }, () => console.log("State was updated in venue search", this.state.venues)))
          .catch(err => console.log(err));
      }
    
      render() {
        return (
          <div className="row justify-content-center home-cards">
            {this.state.venues.map(venues => (
              <VenueCard
                key={venues._id}
                id={venues._id}
                name={venues.venuename}
                city={venues.city}
                state={venues.state}
                image={venues.image}
              />
            ))}
          </div>
        );
      }
    }

export default VenueCitySearchResult;