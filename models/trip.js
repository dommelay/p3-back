const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    city: {type: String, required: true},
    country: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    rating: {type: Number, required: true},
    description: {type: String, required: true},
    travelers: {type: String, required: true},
    image: {type: String, required: true}
})

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;