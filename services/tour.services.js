const Tour = require("../models/Tour");


exports.getToursService = async () => {
    const tours = Tour.find({});
    return tours;
}

exports.createTourService = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}

exports.getTourByIdService = async (id) => {
    const data = await Tour.find({ _id: id });
    console.log(id);
    return data;
}

// exports.updateProductByIdService = async (id) => {
//     console.log(id)
// }