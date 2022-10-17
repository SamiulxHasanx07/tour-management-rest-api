const Tour = require("../models/Tour");


exports.getToursService = async () => {
    const tours = Tour.find({});
    return tours;
}

exports.createTourService = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}