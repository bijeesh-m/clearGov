// controllers/contractorController.js
const Tender = require("../models/tender");
const Bid = require("../models/bidModel");

const cloudinary = require("../config/cloudinary.config");

// View all tenders
module.exports.viewAllTenders = async (req, res) => {
    try {
        const tenders = await Tender.find(); // Fetch only open tenders
        res.status(200).json({ success: true, data: tenders });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching tenders", error: error.message });
    }
};

// View a specific tender
module.exports.viewTenderDetails = async (req, res) => {
    try {
        const tender = await Tender.findById(req.params.id);
        if (!tender) {
            return res.status(404).json({ success: false, message: "Tender not found" });
        }
        res.status(200).json({ success: true, data: tender });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching tender details", error: error.message });
    }
};

// Submit a bid for a tender
module.exports.submitBid = async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    try {
        const { bidAmount, proposal, paymentMode, emdAmount, emdTransactionId, emdPaymentDate, bidValidityDays } =
            req.body;
        const tenderId = req.params.id;

        // Check if the tender is still open
        // const tender = await Tender.findById(tenderId);
        // if (tender.status !== 'Open') {
        //   return res.status(400).json({ success: false, message: 'Tender is no longer open for bidding' });
        // }

        // Array to store the results of uploaded files

        let covers = [];

        // Loop through each file and upload to Cloudinary
        for (const file of req.files) {
            // const result = await cloudinary.uploader.upload(file.path);
            const result = await cloudinary.uploader.upload(file.path);
            covers.push({
                coverName: file.fieldname,
                document: result.secure_url,
            });
        }

        // Create a new bid
        const bid = new Bid({
            contractor: req.user.userId,
            tender: tenderId,
            bidAmount: bidAmount,
            bidValidityDays,
            proposal,
            paymentMode,
            emdAmount,
            emdPaymentDetails: { paymentDate: emdPaymentDate, transactionId: emdTransactionId },
            covers,
        });
        await bid.save();
        res.status(201).json({ success: true, message: "Bid submitted successfully", data: bid });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error submitting bid", error: error.message });
    }
};

// View all bids submitted by the contractor
module.exports.viewMyBids = async (req, res) => {
    try {
        const contractorId = req.user.userId; // Assuming contractor ID is available in the request (e.g., from authentication middleware)
        const bids = await Bid.find({ contractor: contractorId }).populate("tender");
        res.status(200).json({ success: true, bids });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching bids", error: error.message });
    }
};

// View details of a specific bid
module.exports.viewBidDetails = async (req, res) => {
    try {
        const bid = await Bid.findById(req.params.id).populate("tender");
        if (!bid) {
            return res.status(404).json({ success: false, message: "Bid not found" });
        }
        res.status(200).json({ success: true, bid });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching bid details", error: error.message });
    }
};

// Withdraw a bid
module.exports.withdrawBid = async (req, res) => {
    try {
        const bid = await Bid.findById(req.params.id);
        if (!bid) {
            return res.status(404).json({ success: false, message: "Bid not found" });
        }

        // Check if the bid can be withdrawn (e.g., tender is still open)
        // const tender = await Tender.findById(bid.tender);
        // if (tender.status !== "Open") {
        //     return res.status(400).json({ success: false, message: "Bid cannot be withdrawn as the tender is closed" });
        // }

        await Bid.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Bid withdrawn successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error withdrawing bid", error: error.message });
    }
};
