const mongoose = require("mongoose");
const Game = require("./model/GameList");

const games = [
  {
    name: "BGMI",
    mode: "Squad",
    teamSize: 4,
  },
  {
    name: "Free Fire",
    mode: "Squad",
    teamSize: 4,
  },
  {
    name: "Valorant",
    mode: "5v5",
    teamSize: 5,
  },
  {
    name: "Counter-Strike 2",
    mode: "5v5",
    teamSize: 5,
  },
  {
    name: "League of Legends",
    mode: "5v5",
    teamSize: 5,
  },
  {
    name: "Dota 2",
    mode: "5v5",
    teamSize: 5,
  },
  {
    name: "PUBG: Battlegrounds",
    mode: "Squad",
    teamSize: 4,
  },
  {
    name: "Apex Legends",
    mode: "Trio",
    teamSize: 3,
  },
  {
    name: "Rocket League",
    mode: "3v3",
    teamSize: 3,
  },
  {
    name: "EA Sports FC",
    mode: "1v1",
    teamSize: 1,
  },
  {
    name: "Tekken 8",
    mode: "1v1",
    teamSize: 1,
  },
  {
    name: "Street Fighter 6",
    mode: "1v1",
    teamSize: 1,
  },
];

async function seedGames() {
  try {
    await mongoose.connect("mongodb+srv://sandipanjana555_db_user:RjumqOkMPc75UCrw@cluster0.owt2k87.mongodb.net/");

    await Game.deleteMany();

    await Game.insertMany(games);

    console.log("Games inserted successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
}

seedGames();