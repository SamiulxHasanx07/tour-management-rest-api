const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tour.controller");
const viewCount = require("../middleware/viewCount");
router.route("/")
    .get(tourController.getTours)
    .post(tourController.createTour)

router.route("/:id")
    .get(viewCount, tourController.getTourByID )

module.exports = router;