const Registration = require("../model/Registration");

const registerUser = async (req, res) => {
  try {
    const {
      entryType,
      game,
      teamName,
      collegeInstitution,
      contactPhone,
      contactEmail,
      players,
      agreedToRules,
    } = req.body;

    // Basic validation
    if (
      !entryType ||
      !game ||
      !collegeInstitution ||
      !contactPhone ||
      !contactEmail ||
      !players ||
      agreedToRules !== true
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    // Team name required only for team registration
    if (entryType === "team" && !teamName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Team name is required for team entry",
      });
    }

    // Players must be an array
    if (!Array.isArray(players)) {
      return res.status(400).json({
        success: false,
        message: "Players must be an array",
      });
    }

    // Convert frontend player strings into model format
    const formattedPlayers = players
      .map((player) => ({
        inGameName: player.trim(),
      }))
      .filter((player) => player.inGameName);

    if (formattedPlayers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one player is required",
      });
    }

    // Normalize values once, reused for both the duplicate check and the create call
    const normalizedPhone = contactPhone.trim();
    const normalizedEmail = contactEmail.trim().toLowerCase();
    const normalizedTeamName =
      entryType === "team" ? teamName.trim() : undefined;
    const playerNames = formattedPlayers.map((p) => p.inGameName);

    // Look for any existing registration that already shares a phone number,
    // email, team name, or player in-game name.
    // NOTE: this is checked globally across all games. If the same
    // player/team/contact should be allowed to register once per game
    // instead, add `game` into each condition below.
    const duplicateConditions = [
      { contactPhone: normalizedPhone },
      { contactEmail: normalizedEmail },
      { "players.inGameName": { $in: playerNames } },
    ];

    if (normalizedTeamName) {
      duplicateConditions.push({ teamName: normalizedTeamName });
    }

    const existingRegistration = await Registration.findOne({
      $or: duplicateConditions,
    }).lean();

    if (existingRegistration) {
      let message = "This registration already exists";

      if (existingRegistration.contactEmail === normalizedEmail) {
        message = "This email address is already registered";
      } else if (existingRegistration.contactPhone === normalizedPhone) {
        message = "This phone number is already registered";
      } else if (
        normalizedTeamName &&
        existingRegistration.teamName === normalizedTeamName
      ) {
        message = "This team name has already been taken";
      } else {
        const duplicatePlayers = (existingRegistration.players || [])
          .filter((p) => playerNames.includes(p.inGameName))
          .map((p) => p.inGameName);

        if (duplicatePlayers.length > 0) {
          message = `Player(s) already registered: ${duplicatePlayers.join(
            ", "
          )}`;
        }
      }

      return res.status(409).json({
        success: false,
        message,
      });
    }

    // NOTE: this is a check-then-create, so there's a small race-condition
    // window under concurrent requests. For guaranteed atomicity, add unique
    // indexes on contactEmail/contactPhone (and a compound index such as
    // { game: 1, teamName: 1 } if needed) in the Registration schema — the
    // error.code === 11000 handler below will already catch that case.

    // Create registration
    const registration = await Registration.create({
      entryType,
      game,
      teamName: normalizedTeamName,
      collegeInstitution: collegeInstitution.trim(),
      contactPhone: normalizedPhone,
      contactEmail: normalizedEmail,
      players: formattedPlayers,
      agreedToRules,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: registration,
    });
  } catch (error) {
    console.error("Registration error:", error);

    // Duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This registration already exists",
      });
    }

    // Mongoose validation error
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map(
        (err) => err.message
      );

      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  registerUser,
};