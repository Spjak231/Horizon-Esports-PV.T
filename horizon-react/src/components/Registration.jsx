import { useEffect, useState } from "react";

export default function Registration({ activeGame, onSelectGame }) {
  const [entryType, setEntryType] = useState("solo");
  const [teamName, setTeamName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [players, setPlayers] = useState([""]);
  const [msg, setMsg] = useState({ text: "", type: "" });
  const [agreedToRules, setAgreedToRules] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/games");

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch games");
        }

        setGames(data.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);
  const currentGame = games.find((g) => g._id === activeGame);
  const slots =
    entryType === "solo" ? 1 : currentGame ? currentGame.teamSize : 4;

  // Keep the players array length in sync with the required slot count
  const ensurePlayerSlots = (n) => {
    setPlayers((prev) => {
      const next = prev.slice(0, n);
      while (next.length < n) next.push("");
      return next;
    });
  };

  const handleEntryChange = (type) => {
    setEntryType(type);
    const n = type === "solo" ? 1 : currentGame ? currentGame.teamSize : 4;
    ensurePlayerSlots(n);
  };

  const handleGameChange = (gameId) => {
    onSelectGame(gameId);

    const game = games.find((g) => g._id === gameId);

    const n = entryType === "solo" ? 1 : game ? game.teamSize : 4;

    ensurePlayerSlots(n);
  };

  const updatePlayer = (i, value) => {
    setPlayers((prev) => prev.map((p, idx) => (idx === i ? value : p)));
  };

  const resetForm = () => {
    setTeamName("");
    setCollegeName("");
    setContactEmail("");
    setContactPhone("");
    setAgreedToRules(false);
    ensurePlayerSlots(slots);
    setPlayers(Array(slots).fill(""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMsg({ text: "", type: "" });

    // Clean player IDs
    const cleanedPlayers = players.map((p) => p.trim()).filter(Boolean);

    // Basic frontend validation
    if (!activeGame) {
      setMsg({
        text: "Please select a game.",
        type: "error",
      });
      return;
    }

    if (cleanedPlayers.length === 0) {
      setMsg({
        text: "Please enter at least one player ID.",
        type: "error",
      });
      return;
    }

    if (entryType === "team" && !teamName.trim()) {
      setMsg({
        text: "Please enter a team name.",
        type: "error",
      });
      return;
    }

    const payload = {
      entryType,

      // IMPORTANT:
      // activeGame should be the MongoDB Game _id
      game: activeGame,

      teamName: entryType === "team" ? teamName.trim() : "",

      collegeInstitution: collegeName.trim(),

      contactPhone: contactPhone.trim(),

      contactEmail: contactEmail.trim(),

      players: cleanedPlayers,

      // We will add the checkbox for this
      agreedToRules,
    };

    console.log("Sending registration:", payload);

    try {
      const res = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      console.log("Backend response:", data);

      if (!res.ok) {
        setMsg({
          text: data.message || "Registration failed. Please try again.",
          type: "error",
        });

        return;
      }

      setMsg({
        text: "You're in! Registration successful.",
        type: "success",
      });

      console.log("Registered:", data.data);

      resetForm();
    } catch (error) {
      console.error("Registration error:", error);

      setMsg({
        text: "Network error — please check your connection and try again.",
        type: "error",
      });
    }
  };

  return (
    <section className="section" id="register">
      <div className="container">
        <div className="reg-wrap">
          <div className="reg-info reveal">
            <div className="eyebrow">Tournament Registration</div>
            <h2>Lock in your squad for Season 1</h2>
            <p style={{ color: "var(--text-dim)", marginTop: 14 }}>
              Solo or full squad — pick your game, fill in your roster, and
              you're in the bracket. Confirmation goes to your email within 24
              hours.
            </p>

            <div className="reg-info-list">
              <div className="reg-info-item">
                <div className="ico">🎮</div>
                <div>
                  <h5>Two live titles</h5>
                  <p>BGMI and Free Fire squads, 4 players per team.</p>
                </div>
              </div>
              <div className="reg-info-item">
                <div className="ico">🏆</div>
                <div>
                  <h5>Real prize pools</h5>
                  <p>
                    Cash prizes, certificates and MVP spotlights every round.
                  </p>
                </div>
              </div>
              <div className="reg-info-item">
                <div className="ico">📡</div>
                <div>
                  <h5>Broadcast on stream</h5>
                  <p>
                    Every match streamed live with commentary and a leaderboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card glass hud-corners reveal">
            <div className="entry-toggle">
              <button
                type="button"
                className={entryType === "solo" ? "active" : ""}
                data-entry="solo"
                onClick={() => handleEntryChange("solo")}
              >
                Solo Entry
              </button>
              <button
                type="button"
                className={entryType === "team" ? "active" : ""}
                data-entry="team"
                onClick={() => handleEntryChange("team")}
              >
                Team Entry
              </button>
            </div>

            <form id="registerForm" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label>Game</label>
                  <select
                    id="gameSelect"
                    required
                    value={activeGame || ""}
                    onChange={(e) => handleGameChange(e.target.value)}
                    disabled={games.length === 0}
                  >
                    <option value="">Select a game</option>

                    {games.map((g) => (
                      <option key={g._id} value={g._id}>
                        {g.name} — {g.mode}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className="field"
                  id="teamNameField"
                  style={{ display: entryType === "team" ? "block" : "none" }}
                >
                  <label>Team Name</label>
                  <input
                    type="text"
                    id="teamName"
                    placeholder="e.g. Team Vortex"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>College / Institution</label>
                  <input
                    type="text"
                    id="collegeName"
                    placeholder="Your college name"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Contact Phone</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    placeholder="10-digit mobile number"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                  />
                </div>

                <div className="field full">
                  <label>Contact Email</label>
                  <input
                    type="email"
                    id="contactEmail"
                    placeholder="you@example.com"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="field full" style={{ marginTop: 16 }}>
                <label>Player / In-Game IDs</label>
                <div id="playersWrap">
                  {Array.from({ length: slots }).map((_, i) => (
                    <div className="player-row" key={i}>
                      <span className="slot">Player {i + 1}</span>
                      <input
                        type="text"
                        className="player-input"
                        placeholder="In-game name / ID"
                        required
                        value={players[i] || ""}
                        onChange={(e) => updatePlayer(i, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit Registration
              </button>
              <input
                type="checkbox"
                checked={agreedToRules}
                onChange={(e) => setAgreedToRules(e.target.checked)}
                required
              />
              <div
                className={`form-msg${msg.type ? ` ${msg.type}` : ""}`}
                id="formMsg"
              >
                {msg.text}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
