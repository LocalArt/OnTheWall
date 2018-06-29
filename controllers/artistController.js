const db = require("../models");

// Defining methods for the artistController
module.exports = {
  findAll: function(req, res) {
    db.Artist.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Artist.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByName: function(req, res) {
    db.Artist.find({name: {"$regex": req.params.name, "$options": "i"}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByCity: function(req, res) {
    db.Artist.find(req.query)
      .where({city: req.params.city})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByEmail: function(req, res) {
    db.Artist.find(req.query)
      .where({email: req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByImageID: function(req, res) {
    console.log(
      "YOU ARE HERE this is req.body in findByImage " +
        JSON.stringify(req.body, null, 2)
    );
    db.Artist.find({
      image: {
        imageID: req.params.imageID
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Artist.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("this is req.body " + JSON.stringify(req.body, null, 2));
    console.log("id = " + req.params.id);
    db.Artist.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Artist.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
