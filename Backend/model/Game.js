const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  title: {
    type: String,
    required: true,
    trim: true,
  },

  mode: {
    type: String,
    required: true,
    trim: true,
  },

  displayName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  entryType: {
    type: String,
    enum: ["solo", "team", "both"],
    required: true,
  },

  minPlayers: {
    type: Number,
    required: true,
    min: 1,
  },

  maxPlayers: {
    type: Number,
    required: true,
    min: 1,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});