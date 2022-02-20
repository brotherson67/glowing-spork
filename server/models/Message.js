const { Schema, model } = require("mongoose");

const chatSchema = new Schema({
  message: {
    type: String,
    required: true,
    //   unique: true,
    //   trim: true
  },
  sendUsername: {
    type: String,
  },
  receiveUserName: {
    type: String,
  },
  timestamp: Number,
});

const Message = model("Message", chatSchema);

module.exports = Message;
