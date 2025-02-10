const express = require("express");
const govauthController = require("../controllers/govAuth.controller");
const verifyToken = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

const router = express.Router();

router.use(verifyToken, checkRole("Government Authority"));

router.post("/project", govauthController.createProject);
router.get("/projects", govauthController.getProjects);
router.get("/project/:id", govauthController.getProjectById);
router.put("/project/:id", govauthController.updateProject);
router.delete("/project/:id", govauthController.deleteProject);

module.exports = router;
