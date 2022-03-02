const mongoose = require("mongoose");

/*
  // this configuration is for Mongoose Version 5.X.X
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the db"))
  .catch(err => console.log(err));
*/

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// mongoose
// .connect(connectionString)
// .then(() => console.log("Connected to the db"))
// .catch(err => console.log(err));

module.exports = connectDB;
