const Tour = require("../models/Tour");

exports.getToursService = async (queries) => {
    const tours = Tour
        .find({})
        .skip(queries.skip)
        .limit(queries.limit)
        .sort(queries.sortBy)
        .select(queries.fields);
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

exports.updateTourByIdService = async (id, data) => {
    const result = await Tour.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    return result;
}

exports.trendingTourService = async () => {
    const result = await Tour
        .find({}).sort({ view: -1 }).limit(3)

    return result;
}

exports.cheapestTourService = async () => {
    const result = await Tour.find({}).sort({ packagePrice: 1, name: 1 }).limit(3);
    return result;
}