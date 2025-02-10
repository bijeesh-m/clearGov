const Project = require("../models/project");

module.exports.postProject = async (req, res) => {
    const projectDetails = req.body;
    try {
        if (projectDetails) {
            const newProject = await Project.create(projectDetails);
            res.status(200).json({ message: "Project submitted", newProject });
        }
    } catch (error) {
        res.status(500).json({ message: "project submission failed", error: error.message });
    }
};
