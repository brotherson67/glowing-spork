const { Schema, model } = require("mongoose");

const donationSchema = new Schema({
  donationDate: {
    type: Date,
    default: Date.now,
  },
  donationAmount: {
    type: Number,
    default: 0,
  },
  donationDescription: {
    type: String,
  },
});

const Donation = model("Donation", donationSchema);

module.exports = Donation;
