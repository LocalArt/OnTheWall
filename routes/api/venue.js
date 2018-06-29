const router = require("express").Router();
const venueController = require("../../controllers/venueController");

// Matches with "/api/books"
router
  .route("/")
  .get(venueController.findAll)
  .post(venueController.create);

router  
  .route("/name/:name")
  .get(venueController.findByName);

router  
  .route("/city/:city")
  .get(venueController.findByCity);
  
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(venueController.findById)
  .put(venueController.update)
  .delete(venueController.remove);



module.exports = router;
