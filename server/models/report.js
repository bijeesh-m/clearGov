const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
    {
        Content: {
            type: String,
        },
        reportedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        reportedAt: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
