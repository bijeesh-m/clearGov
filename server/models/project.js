const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        projectScope: {
            type: String,
            required: true,
        },
        objectives: {
            type: [String],
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        budget: {
            type: Number,
            required: true,
        },
        tenders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tender" }],
    },
    {
        timestamps: true,
    }
);

const projectModel = mongoose.model("Project", projectSchema);
module.exports = projectModel;
