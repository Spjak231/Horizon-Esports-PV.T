const express = require("express");
const router = express.Router();

const { registerUser } = require("../controller/userController");

// POST /api/users/register
router.post("/register", registerUser);

module.exports = router;