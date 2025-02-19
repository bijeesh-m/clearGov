const mongoose = require("mongoose");

const tenderSchema = new mongoose.Schema(
    {
        project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },

        organisationChain: {
            type: String,
            required: true,
        },
        tenderReferenceNumber: {
            type: String,
            default: "",
            unique: true,
        },
        tenderID: {
            type: String,
            default: "TND" + Date.now(),
            unique: true,
        },
        tenderType: {
            type: String,
            enum: ["Open", "Limited", "EOI"],
            required: true,
        },
        tenderCategory: {
            type: String,
            enum: ["Works", "Goods", "Services", "Consultancy"],
            required: true,
        },
        tenderLocation: {
            type: String,
            required: true,
        },

        paymentMode: {
            type: String,
            enum: ["Online", "Offline"],
            required: true,
        },

        formOfContract: {
            type: String,
            enum: ["Item Rate", "Lump Sum", "Percentage"],
            required: true,
        },
        numberOfCovers: {
            type: Number,
            min: 1,
            required: true,
        },
        covers: [{ type: String }],
        tenderFee: { type: Number, required: true },
        workItemDetails: {
            title: { type: String },
            description: { type: String },
            tenderValue: { type: Number },
            location: { type: String },
            bidValidityDays: { type: Number },
            periodOfWorkDays: { type: Number },
        },
        criticalDates: {
            publishedDate: { type: Date, default: Date.now() },
            bidOpeningDate: { type: Date },
            bidSubmissionEndDate: { type: Date },
        },
        status: {
            type: String,
            enum: ["Not Started", "In Progress", "Completed", "Cancelled"],
            default: "Not Started",
        },
        progress: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    },
    {
        timestamps: true,
    }
);

const tenderModel = mongoose.model("Tender", tenderSchema);
module.exports = tenderModel;
