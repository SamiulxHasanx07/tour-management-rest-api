const express = require("express");
const router = express.Router();

const tourController = require("../controllers/tour.controller");
const viewCount = require("../middleware/viewCount");

router.route("/tours")
    .get(tourController.getTours)
    .post(tourController.createTour)

router.route("/tours/:id")
    .get(viewCount, tourController.getTourByID)

router.route("/tour/:id")
    .patch(tourController.updateProductById)


module.exports = router;