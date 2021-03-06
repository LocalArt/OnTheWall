const router = require("express").Router();
const artistController = require("../../controllers/artistController");
const venueController = require("../../controllers/venueController");

// Matches with "/api/books
router
  .route("/")
  .get(artistController.findAll)
  .post(artistController.create);
  
router  
.route("/name/:name")
.get(artistController.findByName);

router
.route("/city/:city")
.get(artistController.findByCity);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(artistController.findById)
  .put(artistController.update)
  .delete(artistController.remove);

router
  .route("/:id/:imageID")
  .get(artistController.findByImageID)
  .put(artistController.update)
  .delete(artistController.remove);

module.exports = router;
