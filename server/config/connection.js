
const mongoose = require('mongoose');

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/routes',
//   {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//   }
// );

// module.exports = mongoose.connection;

// const mongoose = require("mongoose");

// // mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/routes', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   useCreateIndex: true,
// //   useFindAndModify: false
// // });
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://brotherson67:sIs6PwnP0IWmpopG@cluster0.pnqsj.mongodb.net/glowing-sporky?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
