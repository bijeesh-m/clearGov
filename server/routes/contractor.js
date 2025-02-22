const express = require("express");
const router = express.Router();
const contractorController = require("../controllers/contractor.controller");
const verifyToken = require("../middleware/auth");
const upload = require("../middleware/multer");

// View all tenders
router.get("/tenders", contractorController.viewAllTenders);

// View a specific tender
router.get("/tenders/:id", contractorController.viewTenderDetails);

// Submit a bid for a tender
router.post("/tenders/:id/bid", verifyToken, upload.any(), contractorController.submitBid);

// View all bids submitted by the contractor
router.get("/bids", verifyToken, contractorController.viewMyBids);

// View details of a specific bid
router.get("/bids/:id", verifyToken, contractorController.viewBidDetails);

// Withdraw a bid
router.delete("/bids/:id", contractorController.withdrawBid);

router.post("/expense", verifyToken, upload.single("file"), contractorController.expense);
router.get("/my-expenses", verifyToken, contractorController.myExpenses);
router.get("/won-tenders", verifyToken, contractorController.TendersWon);

module.exports = router;
