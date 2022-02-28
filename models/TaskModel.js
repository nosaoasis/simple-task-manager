const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name value cannot be empty"],
    trim: true,
    maxlenght: [20, "Allowed length of characters is 20"]
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);
