const { Schema, model } = require("mongoose");

const donationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  donationDate: {
    type: Date,
    default: Date.now,
  },
  donationAmount: {
    type: Number,
    required: true,
    default: 0,
  },
  donationDescription: {
    type: String,
  },
});

const Donation = model("Donation", donationSchema);

module.exports = Donation;
