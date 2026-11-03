const mongoose = require("mongoose");
const GameList = require("./GameList");
const User = require("./User");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

const playerSchema = new mongoose.Schema(
  {
    inGameName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const registrationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  entryType: {
    type: String,
    enum: ["solo", "team"],
    required: true,
  },

  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GameList",
    required: true,
  },

  teamName: {
    type: String,
    trim: true,
    required: function () {
      return this.entryType === "team";
    },
  },

  collegeInstitution: {
    type: String,
    required: true,
    trim: true,
  },

  contactPhone: {
    type: String,
    required: true,
    trim: true,
    match: [
      PHONE_REGEX,
      "Enter a valid 10-digit mobile number",
    ],
  },

  contactEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [
      EMAIL_REGEX,
      "Enter a valid email address",
    ],
  },

  players: {
    type: [playerSchema],
    validate: {
      validator: (arr) => arr.length >= 1,
      message: "At least one player is required",
    },
  },

  agreedToRules: {
    type: Boolean,
    required: true,
    validate: {
      validator: (v) => v === true,
      message: "You must agree to the fair-play rules to register",
    },
  },

  status: {
    type: String,
    enum: ["pending", "confirmed", "rejected"],
    default: "pending",
  },
});

// Validate selected game and player count
registrationSchema.pre("validate", async function () {
  if (!this.game || !this.players) {
    return;
  }

  // Find the selected game in GameList
  const game = await GameList.findById(this.game);

  if (!game) {
    throw new Error("Selected game does not exist");
  }

  // Solo = exactly 1 player
  // Team = exactly teamSize players
  const requiredPlayers =
    this.entryType === "solo"
      ? 1
      : game.teamSize;

  const count = this.players.length;

  if (count !== requiredPlayers) {
    throw new Error(
      `${game.name} requires ${requiredPlayers} player${requiredPlayers > 1 ? "s" : ""
      }`
    );
  }
});

registrationSchema.index({ game: 1, status: 1 });
registrationSchema.index({ contactEmail: 1 });

module.exports = mongoose.model(
  "Registration",
  registrationSchema
);