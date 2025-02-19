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
        progress: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        status: {
            type: String,
            enum: ["Not Started", "In Progress", "Completed", "On Hold"],
            default: "Not Started",
        },
        progress: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        status: {
            type: String,
            enum: ["Not Started", "In Progress", "Completed", "On Hold"],
            default: "Not Started",
        },
    },
    {
        timestamps: true,
    }
);

const projectModel = mongoose.model("Project", projectSchema);
module.exports = projectModel;
