const router = require("express").Router();
const venueController = require("../../controllers/venueController");

// Matches with "/api/books"
router
  .route("/")
  .get(venueController.findAll)
  .post(venueController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(venueController.findById)
  .put(venueController.update)
  .delete(venueController.remove);

router  
  .route("/name/:name")
  .get(venueController.findByName);

router  
.route("/city/:city")
.get(venueController.findByName);

module.exports = router;
