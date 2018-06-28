const router = require("express").Router();
const artistRoutes = require("./artists");
const venueRoutes = require("./venue");
const imageRoutes = require("./image");
const cityRoutes = require("./city");

// Book routes
router.use("/artists", artistRoutes);
router.use("/venue", venueRoutes);
router.use("/image", imageRoutes);
router.use("/city", cityRoutes);

module.exports = router;
