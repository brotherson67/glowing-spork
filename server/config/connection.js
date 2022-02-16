mongoose.connect(


  process.env.MONGODB_URI || 'mongodb://localhost/routes',


  {


    useNewUrlParser: true,


    useUnifiedTopology: true,


    useCreateIndex: true,


    useFindAndModify: false,


  },


);

