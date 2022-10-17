const Tour = require("../models/Tour");


exports.createTourService = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}