const Tour = require("../models/Tour");

const viewCount = async (req, res, next) => {
    const { id } = req.params;
    const data = await Tour.findById(id);
    const { view } = data;
    await Tour.updateOne({ _id: id }, { view: view + 1 });
    next();
}

module.exports = viewCount;