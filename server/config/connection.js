require("dotenv").config();
const mongoose = require("mongoose");

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_DB, {
=======
mongoose.connect(process.env.MONGODB_URI ||     "mongodb+srv://brotherson67:sIs6PwnP0IWmpopG@cluster0.pnqsj.mongodb.net/glowing-sporky?retryWrites=true&w=majority",
 {
>>>>>>> 6c490ab8d07d8852cf23af0faebf3502cd2e01c2
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
