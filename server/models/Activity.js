const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
  activity: {
    type: String,
  },
  gearRequired: {
    type: String,
  },
  difficultyLevel: {
    type: String,
  },
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;

// Idea for later: create gear owned entity
