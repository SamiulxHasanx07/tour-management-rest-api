const { createTourService } = require("../services/tour.services");

exports.createTour = async (req, res, next) => {
    try {
        const data = req.body;
        const tour = await createTourService(data);
        res.status(200).json({
            status: "successsful",
            message: "data successfully inserted",
            data: tour
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Tour insert failed",
            error: error.message
        })
    }
}