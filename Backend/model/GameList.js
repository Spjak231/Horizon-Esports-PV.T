const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    mode: {
      type: String,
      required: true,
      trim: true,
    },

    teamSize: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

const GameList = mongoose.model("GameList", gameSchema);

module.exports = GameList;