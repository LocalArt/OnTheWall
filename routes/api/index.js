const router = require("express").Router();
const artistRoutes = require("./artists");
const venueRoutes = require("./venue");

// Book routes
router.use("/artists", artistRoutes);
router.use("/venue", venueRoutes);

module.exports = router;
