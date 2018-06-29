import axios from "axios";

export default {
  // Gets all Artists
  getArtists: function() {
    return axios.get("/api/artists");
  },
  // Gets the artist with the given id
  getSingleArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },

  getArtistByName: function(name) {
    return axios.get("/api/artists/name/" + name);
  },

  getArtistByCity: function(city) {
    return axios.get("/api/artists/city/" + city);
  },

  getSingleImage: function(id, imageID) {
    console.log("id in getSingleImage " + id);
    console.log("imageID in getSingleImage " + imageID);

    return axios.get("/api/image/" + id + "/" + imageID);
  },

  // Deletes the artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/artists/" + id);
  },
  // Saves a artist to the database
  saveArtist: function(artistData) {
    return axios.post("/api/artists", artistData);
  },
  updateArtist: function(id, artistData) {
    return axios.put("/api/artists/" + id, artistData);
  },

  updateVenue: function(id, venueData) {
    return axios.put("/api/venue/" + id, venueData);
  },

  getVenues: function() {
    return axios.get("/api/venue");
  },
  // Gets the artist with the given id
  getSingleVenue: function(id) {
    return axios.get("/api/venue/" + id);
  },

  getSingleVenueByName: function(name) {
    return axios.get("/api/venue/name/" + name);
  },

  getVenueByCity: function(city) {
    return axios.get("/api/venue/city/" + city);
  },
  // Deletes the artist with the given id
  deleteVenue: function(id) {
    return axios.delete("/api/venue/" + id);
  },
  // Saves a artist to the database
  saveVenue: function(venueData) {
    return axios.post("/api/venue", venueData);
  },
  getImages: function() {
    return axios.get("/api/images");
  },
  // Gets the artist with the given id
  // getSingleImage: function(id) {
  //   return axios.get("/api/images/" + id);
  // },
  // Deletes the artist with the given id
  deleteImage: function(id) {
    return axios.delete("/api/images/" + id);
  },
  // Saves a artist to the database
  saveImage: function(imageData) {
    return axios.post("/api/images", imageData);
  }
};
