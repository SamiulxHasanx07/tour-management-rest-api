const { createTourService, getToursService, getTourByIdService, updateProductByIdService, trendingTourService, cheapestTourService } = require("../services/tour.services");

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
        const result = await getTourByIdService(id);
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

exports.updateTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await updateTourByIdService(id, data);

        if (!result.modifiedCount) {
            res.status(204).json({
                status: "Something Missing",
                message: "Please check everything and try again",
                data: result
            })
        }

        res.status(200).json({
            status: "successsful",
            message: `Successfully updated data for this ${id} id`,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Something wrong please check and try again",
            error: error.message
        })
    }
}

exports.trendingTours = async (req, res, next) => {
    try {
        const result = await trendingTourService();

        res.status(200).json({
            status: "successsful",
            message: "Top 3 Trending Tours",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Something wrong please check and try again",
            error: error.message
        })
    }
}

exports.cheapestTours = async (req, res, next) => {
    try {
        const result = await cheapestTourService();

        res.status(200).json({
            status: "successsful",
            message: "Top 3 Cheapest Tours",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Something wrong, please solve error and try again",
            error: error.message
        })
    }
}