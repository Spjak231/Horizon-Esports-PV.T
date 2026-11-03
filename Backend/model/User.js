import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // --- Account ---
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // --- Login ---
    lastLogin: {
      type: Date,
      default: Date.now,
    },

    loginOtp: {
      type: String,
      select: false,
    },

    loginOtpExpiresAt: {
      type: Date,
      select: false,
    },

    // --- Email / account verification ---
    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationOtp: {
      type: String,
      select: false,
    },

    verificationOtpExpiresAt: {
      type: Date,
      select: false,
    },
  },
  { timestamps: true }
);

export const Usermodel = mongoose.model("User", userSchema);