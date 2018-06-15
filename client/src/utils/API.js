import axios from "axios";

export default {
  // Gets all Artists
  getArtists: function() {
    return axios.get("/api/artist");
  },
  // Gets the artist with the given id
  getSingleArtist: function(id) {
    return axios.get("/api/artist/" + id);
  },
  // Deletes the artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/artist/" + id);
  },
  // Saves a artist to the database
  saveArtist: function(artistData) {
    return axios.post("/api/artists", artistData);
  }
};
