const router = require("express").Router();
const imageController = require("../../controllers/imageController");
const artistController = require("../../controllers/artistController");

// Matches with "/api/books"
router
  .route("/")
  .get(imageController.findAll)
  .post(imageController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(imageController.findById)
  .put(imageController.update)
  .delete(imageController.remove);

router
  .route("/:id/:imageID")
  .get(artistController.findByImageID)
  .put(artistController.update)
  .delete(artistController.remove);

module.exports = router;
