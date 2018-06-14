const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/OnTheWall",
  {
    useMongoClient: true
  }
);

const artistSeed = [
  {
    name: "Clay Roop",
    email: "ClaytonRoop@gmail.com",
    password: "Roop1178",
    city: "Raleigh",
    state: "North Carolina",
    zipcode: "27604",
    facebook: "www.facebook.com/clay-roop",
    instagram: "www.instagram.com/clay_roop",
    phone: "443-880-6467",
    biography: "My name is clay. This is my bio. How do you like",
    date: new Date(Date.now())
  },
  {
    name: "Brad Pit",
    email: "bradpitt@gmail.com",
    password: "bradpassword",
    city: "Durham",
    state: "North Carolina",
    zipcode: "27009",
    facebook: "www.facebook.com/bradpitt",
    instagram: "www.instagram.com/bradpitt",
    phone: "443-880-6467",
    biography: "My name is clay. This is my bio. How do you like",
    date: new Date(Date.now())
  }
];

db.Artist.remove({})
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
