const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const contractorBidderSchema = require("./bidderModel");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: function () {
                return this.role === "Citizen";
            },
        },
        email: {
            type: String,
            required: function () {
                return this.role === "Citizen";
            },
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["Citizen", "Contractor", "Government Authority", "Admin"],
            default: "Citizen",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        avatar: {
            type: String,
            default: "https://randomuser.me/api/portraits/men/9.jpg",
        },
        phoneNumber: {
            type: String,
            match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
        },
        address: {
            type: String,
            trim: true,
        },
        contractorOrBidderDetails: {
            type: contractorBidderSchema, // Conditional sub-document schema for contractor/bidder
            required: function () {
                return this.role === "Contractor";
            },
        },
        certifications: {
            type: [String],
            default: [],
        },
        department: {
            type: String,
            required: function () {
                return this.role === "Government Authority";
            },
        },
        position: {
            type: String,
            required: function () {
                return this.role === "Government Authority";
            },
        },
        tenderHistory: {
            type: Array,
            required: function () {
                return this.role === "Government Authority";
            },
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
