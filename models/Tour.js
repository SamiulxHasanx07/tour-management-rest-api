const mongoose = require("mongoose");

//Tour shcema
const tourSchema = mongoose.Schema({
    tourName: {
        type: String,
        required: [true, "Please provide valid tour name"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [5, "Name must be at least 3 characters"],
        maxLength: [256, "Name is too large"]
    },
    destination: {
        from: { type: String, required: [true, "Enter tour starting location"] },
        destination: { type: String, required: [true, "Enter tour destination location"] },
    },
    packagePrice: {
        type: Number,
        required: true,
        min: [0, "Price value must be 0 or gater than 0"]
    },
    packageType: {
        type: String,
        required: true,
        enum: {
            values: ["single", "couple", "family"]
        }
    },
    available: {
        type: String,
        enum: {
            values: ["comming soon", "open", "running", "completed"]
        }
    }
}, {
    timestamps: true
})
const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;