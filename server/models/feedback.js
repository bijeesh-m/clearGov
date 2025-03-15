const mongoose = require("mongoose");

const feedBackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const feedBack = mongoose.model("Feedback", feedBackSchema);
module.exports = feedBack;
