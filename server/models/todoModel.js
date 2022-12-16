const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  tasks: String,
  taskCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date(),
  },
  updatedAt: {
    type: Date,
    default: Date(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
