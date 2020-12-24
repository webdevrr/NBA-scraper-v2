import mongoose from "mongoose";

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  playerImage: String,
  height: String,
  weight: String,
  country: String,
  school: String,
  age: String,
  birthDate: String,
  draft: String,
  experience: String,
});
export = mongoose.model("PlayerProfile", schema);