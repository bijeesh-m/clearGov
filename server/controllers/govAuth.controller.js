const Project = require("../models/project");
// const Expense = require('../models/Expense');
const Bid = require("../models/bidModel");
const Tender = require("../models/tender");

// Project Initiators
exports.createProject = async (req, res) => {
    try {
        let { projectScope, budget, objectives } = req.body;

        console.log(req.body);

        // Ensure objectives is an array by splitting if it's a string
        if (typeof objectives === "string") {
            objectives = objectives.split(",").map((obj) => obj.trim()); // Split and trim each objective
        }

        const project = await Project.create({ projectScope, budget, objectives });
        console.log(project);
        await project.save();
        // res.status(201).json(project);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

module.exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({ message: "Success", projects });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate("tenders");
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.status(200).json({ message: "Success", project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.status(200).json({ message: "Success", project });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Project Approvers
module.exports.approveProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, { status: "Approved" }, { new: true });
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.status(200).json({ message: "Project approved successfully", project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Project Monitors
module.exports.getProjectProgress = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.status(200).json({ progress: project.progress });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.submitProjectReport = async (req, res) => {
    try {
        const { report } = req.body;
        const project = await Project.findByIdAndUpdate(req.params.id, { $push: { reports: report } }, { new: true });
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.status(200).json({ message: "Report submitted successfully", project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Finance Officials
module.exports.submitExpenseReport = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.approveExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, { status: "Approved" }, { new: true });
        if (!expense) return res.status(404).json({ error: "Expense not found" });
        res.status(200).json({ message: "Expense approved successfully", expense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.getBudgetAnalysis = async (req, res) => {
    try {
        const totalBudget = await Expense.aggregate([{ $group: { _id: null, totalSpent: { $sum: "$amount" } } }]);
        res.status(200).json({ totalSpent: totalBudget[0]?.totalSpent || 0 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.bids = async (req, res) => {
    try {
        const bids = await Bid.find().populate("tender").populate("contractor");
        res.status(200).json({ message: "success", bids });
    } catch (error) {
        res.status(500).json({ message: "Error fetching bids under review", error: error.message });
    }
};



module.exports.approveBid = async (req, res) => {
    try {
        const { tenderId, bidId } = req.params;

        // Find the bid
        const bid = await Bid.findById(bidId).populate("contractor");
        if (!bid) {
            return res.status(404).json({ message: "Bid not found" });
        }

        // Update the tender with the awarded bid and contractor
        const updatedTender = await Tender.findByIdAndUpdate(
            tenderId,
            {
                awardedBid: bid._id,
                awardedContractor: bid.contractor._id,
                status: "Completed",
            },
            { new: true }
        ).populate("awardedBid awardedContractor");

        if (!updatedTender) {
            return res.status(404).json({ message: "Tender not found" });
        }

        // Update the bid status
        await Bid.findByIdAndUpdate(bidId, { bidStatus: "Accepted" });

        res.status(200).json({
            message: "Tender awarded successfully",
            tender: updatedTender,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


