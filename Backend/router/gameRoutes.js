const express = require("express");
const router = express.Router();

const GameList = require("../model/GameList");

router.get("/", async (req, res) => {
  try {
    const games = await GameList.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      data: games,
    });
  } catch (error) {
    console.error("Error fetching games:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch games",
    });
  }
});

module.exports = router;