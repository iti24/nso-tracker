const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users"
      },
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
        waterConnection: String,
        electricitySupply: String
    },
    deliveryRiders: String
},{ timestamps: true });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
