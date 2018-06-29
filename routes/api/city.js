const router = require("express").Router();
const artistController = require("../../controllers/artistController");

router
  .route("/:city")
  .get(artistController.findByCity)

module.exports = router;