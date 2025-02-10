const mongoose = require("mongoose");

const contactDetailsSchema = new mongoose.Schema({
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Ms", "Dr"], // Add more titles if necessary
        required: true,
    },
    contactName: {
        type: String,
        required: true,
    },
    contactDOB: {
        type: Date,
        required: true,
    },
    designation: {
        type: String,
    },
    phoneCountryCode: {
        type: String,
        default: "91", // Default to India (91), can be changed
    },
    contactPhoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(v);
            },
            message: (props) => `${props.value} is not a valid phone number!`,
        },
    },
});

module.exports = contactDetailsSchema;
