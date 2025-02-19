const Tender = require("../models/tender");

////////////////// GET ALL TENDERS /////////////////////////////

module.exports.tenders = async (req, res) => {
    try {
        const tenders = await Tender.find();
        res.status(200).json({ message: "success", tenders });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "failed" });
    }
};

//////////////////////// TENDER BY ID ///////////////////////////

module.exports.tenderById = async (req, res) => {
    console.log("sadkfjl");
    const tenderID = req.params.id;
    try {
        const tender = await Tender.findOne({ tenderID: tenderID });
        // const tender = await Tender.findById(tenderID);
        console.log(tender);

        res.status(200).json({ message: "success", tender });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "failed" });
    }
};

//////////////////////// TENDER BY FILTER //////////////////////////

module.exports.tenderByFilter = async (req, res) => {
    try {
        const { location, category } = req.query;

        let query = {};

        if (location) {
            query.tenderLocation = location;
        }
        if (category) {
            query.tenderCategory = category;
        }

        const tender = await Tender.find({ tenderCategory: "Works" });

        res.status(200).json({ message: "success", tender });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "failed" });
    }
};

///////////////////// TENDER BY FILTER ///////////////////////////

module.exports.tenderView = async (req, res) => {
    try {
        const filterType = req.params.filterType;

        const tenders = await Tender.aggregate([
            {
                // Group by tenderCategory
                $group: {
                    _id: `$${filterType}`, // Group by the tenderCategory field
                    tenders: { $sum: 1 }, // count the number of tenders in each category
                },
            },
            {
                // Project the output to desired format
                $project: {
                    // _id: 0, // Hide the _id field
                    // : "$_id", // Rename _id to category
                    tenders: 1, // Keep the count field
                },
            },
        ]);

        res.status(200).json({ message: "success", tenders });
    } catch (error) {
        res.status(500).json({ message: error.message, status: "failed" });
    }
};

////////////////////////////// CREATE A TENDER //////////////////////////////

module.exports.createTender = async (req, res) => {
    try {
        const tender = await Tender.create(req.body);
        res.status(201).json({ message: "tender posted successfully", tender });
    } catch (error) {
        res.status(500).json({ message: "something went wrong", error: error.message });
    }
};
