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
    image: [
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Ffullsizeoutput_7b0.jpeg?alt=media&token=8c5768ff-b9aa-4c5c-8c68-6d11b201a651",
        imageTitle: "MY image",
        description: "What up",
        price: "100"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson #1",
        description: "Michael jackson oil on large canvas",
        price: "1800"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson #2",
        description: "#2 Michael jackson oil on large canvas",
        price: "1700"
      }
    ],
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
    image: [
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Ffullsizeoutput_7b0.jpeg?alt=media&token=8c5768ff-b9aa-4c5c-8c68-6d11b201a651",
        imageTitle: "MY image",
        description: "What up",
        price: "100"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson #1",
        description: "Michael jackson oil on large canvas",
        price: "1800"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson #2",
        description: "#2 Michael jackson oil on large canvas",
        price: "1700"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson in Pain #3",
        description: "#3 Michael jackson oil on large canvas",
        price: "1700"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson in Pain #4",
        description: "#4 Michael jackson oil on large canvas",
        price: "1700"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson #5",
        description: "#5 Michael jackson oil on large canvas",
        price: "1800"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson in Pain #6",
        description: "#6 Michael jackson oil on large canvas",
        price: "1700"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson in Pain #7",
        description: "#7 Michael jackson oil on large canvas",
        price: "1700"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: " Michael Jackson in Pain #8",
        description: "#8 Michael jackson oil on large canvas",
        price: "1700"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson #9",
        description: "#9 Michael jackson oil on large canvas",
        price: "1800"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson in Pain #10",
        description: "#10 Michael jackson oil on large canvas",
        price: "1700"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: "Michael Jackson in Pain #11",
        description: "#11 Michael jackson oil on large canvas",
        price: "1700"
      },
      {
        url:
          "https://firebasestorage.googleapis.com/v0/b/on-the-wall-6db67.appspot.com/o/artists%2Fcategories%2Fmj.jpeg?alt=media&token=ec553132-15dc-4e30-8bbf-464878823d2d",
        imageTitle: " Michael Jackson in Pain #12",
        description: "#12 Michael jackson oil on large canvas",
        price: "1700"
      }
    ],
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

const venueSeed = [
  {
    venuename: "Brew Coffee",
    email: "ClaytonRoop@gmail.com",
    password: "Roop1178",
    city: "Raleigh",
    state: "North Carolina",
    zipcode: "27604",
    website: "www.brewcoffee.com",
    instagram: "www.instagram.com/brewcoffee",
    phone: "443-999-9999",
    description: "Brew Coffee in Raleigh Serves Coffee  Hot and Cold",
    date: new Date(Date.now())
  },
  {
    venuename: "Starbucks Coffee",
    email: "starbucsk@gmail.com",
    password: "starbucks",
    city: "Charleston",
    state: "South Carolina",
    zipcode: "27699",
    website: "www.starbucks.com",
    instagram: "www.instagram.com/starbucks",
    phone: "443-777-9779",
    description: "Brew Coffee in Raleigh Serves Coffee  Hot and Cold",
    date: new Date(Date.now())
  }
];

db.Venue.remove({})
  .then(() => db.Venue.collection.insertMany(venueSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const imageSeed = [
  {
    imageUrl:
      "https://www.flickr.com/photos/bill_angel/11419643834/in/faves-12403504@N02/",
    description: "People in the rain",
    price: 43.44
  },
  {
    imageUrl:
      "https://www.flickr.com/photos/bill_angel/11420510054/in/faves-britishlibrary/",
    description: "saxaphone thing",
    price: 65.88
  }
];

db.Image.remove({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
