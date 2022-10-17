const { createTourService, getToursService, getTourById } = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
    try {
        const result = await getToursService();
        res.status(200).json({
            status: "successsful",
            totalToors: result.length,
            message: "All tour data",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "something went wrong",
            error: error.message
        })
    }

}

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

exports.getTourByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getTourById(id);
        res.status(200).json({
            status: "successsful",
            message: `Data for this ${id}`,
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Failed please check and try again",
            error: error.message
        })
    }
}
