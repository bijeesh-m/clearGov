const mongoose = require("mongoose");
const contactDetailsSchema = require("./contactDetails");

// Schema for contractor or bidder details
const contractorBidderSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    licenceHolderName: {
        type: String,
        required: true,
    },
    preferentialBidder: {
        type: Boolean,
        default: false, // Yes/No field represented as Boolean
    },
    registrationNumber: {
        type: String,
        required: true,
    },
    registeredAddress: {
        type: String,
        required: true,
    },
    partnersOrDirectors: {
        type: [String], // Array of names for multiple partners or directors
    },

    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    panNumber: {
        type: String,
        required: true,
        match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, // PAN number format validation
    },



    contactDetails: {
        type: contactDetailsSchema, // Embedded contact details schema
        required: true,
    },
});

module.exports = contractorBidderSchema;
