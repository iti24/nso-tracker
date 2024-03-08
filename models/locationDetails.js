const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locationDetails: {
        location: String,
        address: String, 
        population: Number,
        geoCoordinates: {
            latitude: Number,
            longitude: Number
        },
    },
    timings: String,
    operationalParameters: {
        waterConnection: Boolean,
        electricitySupply: Boolean
    },
    deliveryRisks: String
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
