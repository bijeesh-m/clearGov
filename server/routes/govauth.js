const express = require("express");
const govauthController = require("../controllers/govAuth.controller");
const verifyToken = require("../middleware/auth");
const checkRole = require("../middleware/checkRole");

const router = express.Router();

router.use(verifyToken, checkRole(["Government Authority","Citizen"]));

router.post("/project", govauthController.createProject);
router.get("/projects", govauthController.getProjects);
router.get("/project/:id", govauthController.getProjectById);
router.put("/project/:id", govauthController.updateProject);
router.delete("/project/:id", govauthController.deleteProject);
router.get("/bids", govauthController.bids);
router.put("/bids/:bidId/status", govauthController.approveBid);

module.exports = router;
