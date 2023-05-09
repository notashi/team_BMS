const mongoose = require("mongoose")
const { Schema, model } = mongoose

// const seats = {
//     A1: {
//         type: Number,
//         default: 0
//     },
//     A2: {
//         type: Number,
//         default: 0
//     },
//     A3: {
//         type: Number,
//         default: 0
//     },
//     A4: {
//         type: Number,
//         default: 0
//     }
// }

const movieSchema = new Schema({
    movie: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    seats: {
        type: Array,
        required: true
    }
},
    { timestamps: true }
)

const movie = model("booking", movieSchema)
module.exports = movie