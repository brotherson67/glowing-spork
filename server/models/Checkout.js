const mongoose = require("mongoose");

const { Schema } = mongoose;

const checkoutSchema = new Schema({
  donationDate: {
    type: Date,
    default: Date.now,
  },
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Donation",
    },
  ],
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
