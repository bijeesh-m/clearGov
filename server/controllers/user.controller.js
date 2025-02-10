const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

////////////////////// PROTECTED ROUTE //////////////////////////////

module.exports.users = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ message: "this is a protected route", users });
    } catch (error) {
        console.log(error);
    }
};

/////////////////////////// USER BY ID ///////////////////////////////

module.exports.userById = async (req, res) => {
    const  userId  = req.params.id;

    try {
        const user = await User.findById(userId);

        console.log(user);
        res.json({ message: "user details fetched successfully ", user });
    } catch (error) {
        console.log(error);
    }
};

///////////////////////////// UPDATE USER STATUS ///////////////////////////////

module.exports.user = async (req, res) => {
    const { id } = req.params;
    const { isActive } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { isActive: isActive }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "User status updated successfully.", user });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while updating user status.", error: error.message });
    }
};

module.exports.updateProfile = async (req, res) => {
    console.log(req.file);

    // console.log(req.file);
};
