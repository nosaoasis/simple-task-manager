const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const errorPage = require('./middleware/error')
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));


app.use("/api/v1/tasks", tasks);
app.use("*", errorPage)

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
