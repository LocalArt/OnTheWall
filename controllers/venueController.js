const db = require("../models");

// Defining methods for the VenueController
module.exports = {
  findAll: function(req, res) {
    db.Venue.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Venue.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.Venue.find({venuename: {"$regex": req.params.name, "$options": "i"}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCity: function(req, res) {
    db.Venue.find(req.query)
      .where({city: req.params.city})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Venue.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("this is req.body " + JSON.stringify(req.body, null, 2));
    console.log("id = " + req.params.id);
    db.Venue.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log("YAY YOU DID IT");
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Venue.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
